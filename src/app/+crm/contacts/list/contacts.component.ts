import { Component, ViewChild, AfterViewInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Client } from 'app/models/client';
import { CreateClientDialogComponent } from '../../clients/dialog/create-dialog.component';
import * as actions from 'app/+crm/state/clients/client.actions';
import * as app from 'app/state/app/app.actions';

@Component({
  selector: 'app-contacts',
  styleUrls: ['contacts.component.scss'],
  templateUrl: 'contacts.component.html',
})
export class ContactsComponent {
  state$: Observable<any>;
  dialogRef: MatDialogRef<CreateClientDialogComponent>;
  @Input() client: Client;

  constructor(private store: Store<any>, private dialog: MatDialog) {

  }

  create () {
    // this.router.navigate(['create'], { relativeTo: this.route });
    const width = '440px';
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
}
