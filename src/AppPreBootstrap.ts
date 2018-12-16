import * as moment from 'moment';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Type, CompilerOptions, NgModuleRef, Injector } from '@angular/core';
import { AppConsts } from '@shared/AppConsts';

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

export class AppPreBootstrap {
    static run(injector: Injector, callback: () => void): void {
        let httpClient = injector.get(HttpClient);

        console.log("由52ABP模板构建,详情请访问 https://www.52abp.com");

        AppPreBootstrap.getApplicationConfig(httpClient, () => {
            AppPreBootstrap.getUserConfiguration(httpClient, callback);
        });
    }

    static bootstrap<TM>(
        moduleType: Type<TM>,
        compilerOptions?: CompilerOptions | CompilerOptions[],
    ): Promise<NgModuleRef<TM>> {
        return platformBrowserDynamic().bootstrapModule(
            moduleType,
            compilerOptions,
        );
    }

    private static getApplicationConfig(httpClient: HttpClient, callback: () => void) {
        let envName = '';
        if (environment.production) {
            envName = 'prod';
        } else {
            envName = 'dev';
        }
        let url = '/assets/appconfig.' + envName + '.json';
        httpClient.get(url, {
            headers: {
                'Abp.TenantId': abp.multiTenancy.getTenantIdCookie() + '',
            }
        }).subscribe((result: any) => {
            AppConsts.appBaseUrl = window.location.protocol + '//' + window.location.host;
            AppConsts.remoteServiceBaseUrl = result.remoteServiceBaseUrl;


            callback();
        })
    }

    private static getCurrentClockProvider(
        currentProviderName: string,
    ): abp.timing.IClockProvider {
        if (currentProviderName === 'unspecifiedClockProvider') {
            return abp.timing.unspecifiedClockProvider;
        }

        if (currentProviderName === 'utcClockProvider') {
            return abp.timing.utcClockProvider;
        }

        return abp.timing.localClockProvider;
    }

    private static getUserConfiguration(
        httpClient: HttpClient,
        callback: () => void,
    ) {
        let url = AppConsts.remoteServiceBaseUrl + '/AbpUserConfiguration/GetAll';

        let token = abp.auth.getToken() || '';
        httpClient.get(url, {
            headers: {
                "Authorization": `Bearer ${token}`,
                '.AspNetCore.Culture': abp.utils.getCookieValue('Abp.Localization.CultureName'),
                'Abp.TenantId': abp.multiTenancy.getTenantIdCookie() + '',
            }
        }).subscribe((result: any) => {
            debugger

            _.merge(abp, result);

            abp.clock.provider = this.getCurrentClockProvider(result.clock.provider);

            moment.locale(abp.localization.currentLanguage.name);
            (window as any).moment.locale(abp.localization.currentLanguage.name);

            if (abp.clock.provider.supportsMultipleTimezone) {
                moment.tz.setDefault(abp.timing.timeZoneInfo.iana.timeZoneId);
                (window as any).moment.tz.setDefault(abp.timing.timeZoneInfo.iana.timeZoneId);
            }


            // 注册语言,NG-Zorro的DataPicker要使用
            registerLocaleData(zh);

            callback();
        });
    }
}
