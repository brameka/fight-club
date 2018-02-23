import { Component, ViewChild, AfterViewInit, Input } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Client } from 'app/models/client';
import { CreateContactDialogComponent } from '../dialog/create-contact-dialog.component';
import * as actions from 'app/+crm/state/clients/client.actions';
import * as app from 'app/state/app/app.actions';

@Component({
  selector: 'app-contacts',
  styleUrls: ['contacts.component.scss'],
  templateUrl: 'contacts.component.html',
})
export class ContactsComponent implements AfterViewInit {
  state$: Observable<any>;
  dialogRef: MatDialogRef<CreateContactDialogComponent>;
  @Input() client: Client;

  constructor(private store: Store<any>,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private service: SlimLoadingBarService) {
  }

  create () {
    this.router.navigate(['create-contact'], { relativeTo: this.route });
  }

  close() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  ngAfterViewInit() {
    this.service.complete();
  }
}
