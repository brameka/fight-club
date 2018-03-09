import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { MatDialog, MatSort, MatDialogRef } from '@angular/material';
import * as actions from 'app/+crm/state/clients/client.actions';
import * as app from 'app/state/app/app.actions';

import { CreateProtectionDialogComponent } from './dialog/create-protection-dialog.component';

@Component({
  selector: 'app-protetion',
  styleUrls: ['protection.component.scss'],
  templateUrl: 'protection.component.html',
})
export class ProtectionComponent implements AfterViewInit {
  state$: Observable<any>;
  app$: Observable<any>;
  protectionDialog: MatDialogRef<CreateProtectionDialogComponent>;
  index: number = 0;

  constructor(private slimService: SlimLoadingBarService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private store: Store<any>) {

    }

    ngAfterViewInit() {
        this.slimService.complete();
    }

    createProtection() {
        const width = '800px';
        this.protectionDialog = this.dialog.open(CreateProtectionDialogComponent, {
          width: width,
          panelClass: 'app-dialog__panel'
        });
        this.protectionDialog.afterClosed().subscribe(result => {
          // this.store.dispatch(new actions.CloseDialogSuccess());
        });
    }

    selectedIndexChange(index: number) {
      this.index = index;
    }
}