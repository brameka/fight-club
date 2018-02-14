import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { MatDialog, MatSort, MatDialogRef } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as actions from 'app/+crm/state/clients/client.actions';
import * as app from 'app/state/app/app.actions';

import { CreateContactDialogComponent } from 'app/+crm/contacts/dialog/create-contact-dialog.component';

@Component({
  selector: 'app-client-setup',
  styleUrls: ['client-setup.component.scss'],
  templateUrl: 'client-setup.component.html',
})
export class ClientSetupComponent {
  id: string;
  state$: Observable<any>;
  routeSubscription: Subscription;
  dialogRef: MatDialogRef<CreateContactDialogComponent>;

  constructor(private slimService: SlimLoadingBarService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private store: Store<any>) {
      this.slimService.start();
      this.state$ = this.store.select(state => state.crm.clients);
      this.state$.subscribe(x => {

      });
      this.routeSubscription = this.route.params.subscribe(params => {
        this.id = params['id']; // (+) converts string 'id' to a number
        this.getClient(this.id);
      });
      this.store.dispatch(new app.ShowState({
        state: 'client',
        title: 'Client'
      }));
  }

  getClient(id: string) {
    this.store.dispatch(new actions.GetClient({id}));
  }

  createContact () {
    this.router.navigate(['create'], { relativeTo: this.route });
    // const width = '700px';
    // this.dialogRef = this.dialog.open(CreateContactDialogComponent, {
    //   width: width,
    //   panelClass: 'app-dialogx__panel'
    //   // backdropClass: 'app-full-dialog__backdrop'
    // });
    // this.dialogRef.afterClosed().subscribe(result => {
    //   // this.store.dispatch(new actions.CloseDialogSuccess());
    // });
  }
}
