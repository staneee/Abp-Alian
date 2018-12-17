import { Component, OnInit } from '@angular/core';
import { NzModalService, NzNotificationService, NzMessageService } from 'ng-zorro-antd';
import { MessageExtension } from '@shared/helpers/message.extension';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class RootComponent implements OnInit {
  constructor(
    private _modalService: NzModalService,
    private _messageService: NzMessageService,
    private _notifyService: NzNotificationService,
  ) { }

  ngOnInit(): void {
    // 覆盖abp自带的通知和mssage
    // MessageExtension.overrideAbpMessageByMini(
    //   this._messageService,
    //   this._modalService,
    // );

    //  覆盖abp.message替换为ng-zorro的模态框
    MessageExtension.overrideAbpMessageByNgModal(this._modalService);

    //  覆盖abp.notify替换为ng-zorro的notify
    MessageExtension.overrideAbpNotify(this._notifyService);
  }
}
