import { state } from '@angular/animations';
import {
  NzModalService,
  NzNotificationService,
  NzNotificationDataOptions,
  NzMessageService,
} from 'ng-zorro-antd';
import { parse } from 'date-fns';

export class AppConsts {
  static remoteServiceBaseUrl: string;

  static appBaseUrl: string;
  static uploadApiUrl = '/api/File/Upload';

  static readonly userManagement = {
    defaultAdminUserName: 'admin',
  };

  static readonly localization = {
    defaultLocalizationSourceName: 'YoyoCmsTemplate',
  };

  static readonly authorization = {
    encrptedAuthTokenName: 'enc_auth_token',
  };
  static maxProfilPictureMb = 1; // 个人头像上传最大MB

  static l(key: string, ...args: any[]): string {
    let localizedText = abp.localization.localize(
      key,
      AppConsts.localization.defaultLocalizationSourceName,
    );

    if (!localizedText) {
      localizedText = key;
    }

    if (!args || !args.length) {
      return localizedText;
    }

    args.unshift(localizedText);
    return abp.utils.formatString.apply(this, args);
  }

  /**
   * 数据表格设置
   */
  // tslint:disable-next-line:member-ordering
  static readonly grid = {
    /**
     * 每页显示条目数
     */
    defaultPageSize: 10,
    /**
     * 每页显示条目数下拉框值
     */
    defaultPageSizes: [5, 10, 15, 20, 25, 30, 50, 80, 100],
  };
}
