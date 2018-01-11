import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatSort, MatDialogRef } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as actions from '../../state/users/users.actions';
import * as app from '../../state/app/app.actions';

import { UsersDialogComponent } from '../dialog/users-dialog.component';
import { CreateUsersDialogComponent } from '../dialog/create-users-dialog.component';

@Component({
  selector: 'app-users',
  styleUrls: ['users.component.scss'],
  templateUrl: 'users.component.html',
})
export class UsersComponent {
  state$: Observable<any>;
  createDialogRef: MatDialogRef<CreateUsersDialogComponent>;
  dialogRef: MatDialogRef<UsersDialogComponent>;

  fields: any[] = [
    'Full Name',
    'First Name',
    'Email',
    'Type'
  ];

  constructor(private slimService: SlimLoadingBarService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private store: Store<any>) {
      this.slimService.start();
      this.store.dispatch(new app.ShowState({
        title: 'Users',
        state: 'users',
        subState: 'default',
        margin: '64px',
        menuColor: 'primary',
        loadingColor: '#fff'
      }));
      this.store.dispatch(new actions.GetUsers({ id: 1 }));
      this.state$ = this.store.select(state => state);
  }

  create (): void {
    const width = '800px';
    this.createDialogRef = this.dialog.open(CreateUsersDialogComponent, {
      width: width,
      panelClass: 'app-loans__panel'
    });
    this.dialogRef.afterClosed().subscribe(result => {

    });
  }

  edit (): void {
    const width = '800px';
    this.dialogRef = this.dialog.open(UsersDialogComponent, {
      width: width,
      panelClass: 'app-loans__panel'
    });
    this.dialogRef.afterClosed().subscribe(result => {
      // this.store.dispatch(new actions.CloseDialogSuccess());
    });
  }

}
