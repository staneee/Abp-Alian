import { Injectable } from '@angular/core';
import { ACLService } from '@delon/acl';

@Injectable()
export class PermissionService {

    constructor(
        private aclService: ACLService
    ) {

    }

    /**
     * 判断是否拥有某权限
     * @param permissionName (单个/多个) 权限名称
     */
    isGranted(permissionName: string | string[]): boolean {
        if (!permissionName || permissionName.length === 0) {
            return true;
        }
        if (Array.isArray(permissionName)) {
            return this.aclService.canAbility({
                ability: permissionName,
                mode: 'allOf'
            });
        } else {
            return this.aclService.canAbility(permissionName);
        }
    }

    /**
     * 添加权限名称
     * @param permissionName 添加(单个/多个)权限名称
     */
    addPermission(permissionName: string | string[]) {
        if (!permissionName || permissionName.length === 0) {
            return;
        }



        if (Array.isArray(permissionName)) {
            for (let i = 0; i < permissionName.length; i++) {
                let tmppermissionName = permissionName[i];
                if (this.aclService.data.abilities.every(item => item === tmppermissionName)) {
                    continue;
                }
                this.aclService.setAbility([tmppermissionName]);
            }
        } else {
            if (this.aclService.data.abilities.every(item => item === permissionName)) {
                return;
            }
            this.aclService.setAbility([permissionName]);
        }
    }

    /**
     * 移除单个/多个权限
     * @param permissionName (单个/多个)权限名称
     */
    removePermission(permissionName: string | string[]) {
        if (!permissionName || permissionName.length === 0) {
            return;
        }

        if (Array.isArray(permissionName)) {
            this.aclService.removeAbility(permissionName);
        } else {

            this.aclService.removeAbility([permissionName]);
        }
    }


    /**
  * 填充数据
  * @param auth 
  */
    extend(auth) {
        let permissions: string[] = [];
        for (let permission in auth.grantedPermissions) {
            permissions.push(permission);
        };
        this.addPermission(permissions)
    }

}