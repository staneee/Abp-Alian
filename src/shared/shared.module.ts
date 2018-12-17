import { CustomComponentModule } from '@shared/components/custom-components.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AbpModule } from '@abp/abp.module';
import { RouterModule } from '@angular/router';

import { AppSessionService } from '@shared/session/app-session.service';
import { AppUrlService } from '@shared/nav/app-url.service';
import { AppAuthService } from '@shared/auth/app-auth.service';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';

// region: third libs
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CountdownModule } from 'ngx-countdown';

/**
 * 第三方的一些组件模块
 */
const THIRDMODULES = [
  NgZorroAntdModule,
  CountdownModule,
  CustomComponentModule,
];

import { DelonABCModule, PageHeaderConfig } from '@delon/abc';
import { DelonFormModule } from '@delon/form';

import { AlainThemeModule, ModalHelper } from '@delon/theme';

// endregion

import { EqualValidator } from './utils/validation/index';
import { DelonChartModule } from '@delon/chart';
import { PermissionService } from './auth/permission.service';
const PIPES = [EqualValidator];

@NgModule({
  imports: [
    CommonModule,
    AbpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    AlainThemeModule.forChild(),
    DelonABCModule,
    // DelonACLModule,
    DelonChartModule,
    DelonFormModule,
    // third libs
    ...THIRDMODULES,
  ],
  declarations: [...PIPES],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AlainThemeModule,
    DelonABCModule,
    // DelonACLModule,
    DelonChartModule,
    DelonFormModule,
    // third libs
    ...PIPES,
    ...THIRDMODULES,
  ],
  providers: [
    ModalHelper,
    PermissionService
    // { provide: AdPageHeaderConfig, useFactory: pageHeaderConfig },
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AppSessionService,
        AppUrlService,
        AppAuthService,
        AppRouteGuard
      ],
    };
  }
}
