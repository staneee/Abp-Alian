import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { ACLService } from '@delon/acl';
import { PermissionCheckerService } from '@shared/permission-checker.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  constructor(
    private http: _HttpClient,
    private aclService: ACLService,
    private permissionCheckerService: PermissionCheckerService
  ) { }

  ngOnInit() {

  }


  addAcl() {
    debugger
    let acl = this.aclService;
    // acl.add({
    //   ability:["test"]
    // })

    // acl.set({
    //   ability:["test"]
    // })
    acl.attachAbility(['test']);
  }

  
  removeAcl(){
    debugger
    let acl = this.aclService;
    acl.removeAbility(["test"]);
  }
  addAclAbc() {
    debugger
    let acl = this.aclService;
    // acl.add({
    //   ability:["test"]
    // })

    // acl.set({
    //   ability:["test"]
    // })
    acl.attachAbility(['abc']);
  }


  removeAclAbc(){
    debugger
    let acl = this.aclService;
    acl.removeAbility(["abc"]);
  }

  isG(pName: string): boolean {
    return this.permissionCheckerService.isGranted(pName);
  }
}
