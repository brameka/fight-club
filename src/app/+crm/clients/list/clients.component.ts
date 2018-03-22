import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatSort, MatDialogRef } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ClientsDialogComponent } from '../dialog/clients-dialog.component';
import { CreateClientDialogComponent } from '../dialog/create-dialog.component';
import * as actions from 'app/+crm/state/clients/client.actions';
import * as app from 'app/state/app/app.actions';

@Component({
  selector: 'app-clients',
  styleUrls: ['clients.component.scss'],
  templateUrl: 'clients.component.html',
})
export class ClientsComponent {
  state$: Observable<any>;
  dialogRef: MatDialogRef<CreateClientDialogComponent>;

  rows = [];

  columns = [
    { name: 'Company' },
    { name: 'Name' },
    { name: 'Gender' }
  ];

  constructor(private slimService: SlimLoadingBarService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private store: Store<any>) {
      this.slimService.start();
      // this.store.dispatch(new app.ShowState({
      //   title: 'Clients',
      //   subState: '',
      //   margin: '64px',
      //   menuColor: 'primary',
      //   loadingColor: '#fff'
      // }));
      this.store.dispatch(new actions.GetClients({ id: 1 }));
      this.state$ = this.store.select(state => state.crm.clients);
      this.fetch((data) => {
        this.rows = data;
      });
  }

  create () {
    // this.router.navigate(['create'], { relativeTo: this.route });
    const width = '800px';
    this.dialogRef = this.dialog.open(CreateClientDialogComponent, {
      width: width,
      panelClass: 'app-dialog__panel'
      // backdropClass: 'app-full-dialog__backdrop'
    });
    this.dialogRef.afterClosed().subscribe(result => {
      // this.store.dispatch(new actions.CloseDialogSuccess());
    });
  }

  close() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      const data = JSON.parse(req.response);
      cb(data);
    };

    req.send();
  }
}
