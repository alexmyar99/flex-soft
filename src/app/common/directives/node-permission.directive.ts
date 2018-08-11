/*!
 * @license
 * Alfresco Example Content Application
 *
 * Copyright (C) 2005 - 2018 Alfresco Software Limited
 *
 * This file is part of the Alfresco Example Content Application.
 * If the software was purchased under a paid Alfresco license, the terms of
 * the paid license agreement will prevail.  Otherwise, the software is
 * provided under the following open source license terms:
 *
 * The Alfresco Example Content Application is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * The Alfresco Example Content Application is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Alfresco. If not, see <http://www.gnu.org/licenses/>.
 */

import { Directive, HostListener, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MinimalNodeEntity } from '@alfresco/adf-core/node_modules/alfresco-js-api';
import { PermissionAddComponent } from '../../components/permission-add/permission-add.component';

@Directive({
    selector: '[aca-permission-add]'
})
export class NodePermissionDirective2 {
    // tslint:disable-next-line:no-input-rename
    @Input('aca-permission-add') node: MinimalNodeEntity;

    @HostListener('click')
    onClick() {
        //this.onManageVersions()
        let node = this.node;
        this.dialog.open(PermissionAddComponent, {
          data: {node}
        });
    }

    constructor(
        // private store: Store<AppStore>,
        // private contentApi: ContentApiService,
        private dialog: MatDialog,
    ) {}


}

  // async onManageVersions() {
  //       if (this.node && this.node.entry) {
  //           let entry = this.node.entry;
  //
  //           if (entry.nodeId || (<any>entry).guid) {
  //               entry = await this.contentApi.getNodeInfo(
  //                   entry.nodeId || (<any>entry).id
  //               ).toPromise();
  //               this.openVersionManagerDialog(entry);
  //           } else {
  //               this.openVersionManagerDialog(entry);
  //           }
  //       } else if (this.node) {
  //           this.openVersionManagerDialog(<MinimalNodeEntryEntity>this.node);
  //       }
  //   }
  //
  //   openVersionManagerDialog(node: MinimalNodeEntryEntity) {
  //       // workaround Shared
  //       if (node.isFile || node.nodeId) {
  //           this.dialog.open(NodeVersionsDialogComponent, {
  //               data: { node },
  //               panelClass: 'adf-version-manager-dialog-panel',
  //               width: '630px'
  //           });
  //       } else {
  //           this.store.dispatch(
  //               new SnackbarErrorAction('APP.MESSAGES.ERRORS.PERMISSION')
  //           );
  //       }
  //   }
