import { Injectable } from '@angular/core';
import { ACLService } from '@delon/acl';

@Injectable()
export class PermissionCheckerService {

    constructor(
        private aclService: ACLService
    ) {

    }
    // isGranted(...permissionName: string | string[]) {
    //     if (typeof (permissionName) === 'string') {
    //         return this.aclService.canAbility(permissionName);
    //     } else {

    //         return this.aclService.canAbility({
    //             ability: permissionName,
    //             mode: 'allOf'
    //         });
    //     }


    // }
    isGranted(...permissionNames: string[]): boolean {
        if (!permissionNames) {
            return false;
        }


        if (permissionNames.length === 1) {
            return this.aclService.canAbility(permissionNames[0]);
        } else {
            console.log(permissionNames);
            return this.aclService.canAbility({
                ability: permissionNames,
                // mode: 'allOf'
            });
        }
    }
}