import { Component, ViewChild, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatSort, MatDialogRef } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Contact } from 'app/models/contact';
import { Role } from 'app/models/role';
import { CreateContactDialogComponent } from '../dialog/create-contact-dialog-component';
import { ContactState } from 'app/+crm/state/contacts/contact.reducer';
import * as actions from 'app/+crm/state/contacts/contact.actions';
import * as app from 'app/state/app/app.actions';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-table-spike',
  styleUrls: ['contacts.component.scss'],
  templateUrl: 'contacts.component.html',
})
export class ContactsComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['name', 'email', 'mobile', 'city'];
  database = new ContactDatabase();
  dataSource: ContactDataSource | null;
  state$: Observable<any>;
  subscription$: any;
  dialogRef: MatDialogRef<CreateContactDialogComponent>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private slimService: SlimLoadingBarService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private store: Store<any>) {
      this.state$ = this.store.select(state => state);
      this.subscription$ = this.state$.subscribe((x) => {
        // if (x.Contact.isCloseDialog) {
        //   this.close();
        // }
      });

  }

  ngOnDestroy() {
    if (this.subscription$) {
      // this.subscription$.unsubscribe();
      this.close();
    }
  }

  ngOnInit() {
    this.dataSource = new ContactDataSource(this.database, this.paginator, this.sort);
  }

  ngAfterViewInit() {
    this.store.dispatch(new app.ShowHomeState());
    this.slimService.complete();
  }

  search(term: any) {
    this.dataSource.filter = term;
  }

  details(row: any) {
    // this.store.dispatch(new actions.ResetRoute());
    // const Contact = {
    //   id: 1
    // };
    // this.router.navigate(['../Contacts/', Contact.id], { relativeTo: this.route });
  }

  create (): void {
    const width = '800px';
    this.dialogRef = this.dialog.open(CreateContactDialogComponent, {
      width: width,
      panelClass: 'app-create-contacts__panel'
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

export class ContactDataSource extends DataSource<any> {
  filterChange = new BehaviorSubject('');
  get filter(): string { return this.filterChange.value; }
  set filter(filter: string) { this.filterChange.next(filter); }

  constructor(private database: ContactDatabase,
    private paginator: MatPaginator,
    private sort: MatSort) {
    super();
  }

  connect(): Observable<Contact[]> {
    const displayDataChanges = [
      this.database.dataChange,
      this.paginator.page,
      this.sort.sortChange,
      this.filterChange
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this.getSortedData();
    });

  }

  getSortedData(): Contact[] {
    const data = this.database.data.slice();
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }
    return data.splice(startIndex, this.paginator.pageSize);
  }

  disconnect() {}
}


export class ContactDatabase {

  dataChange: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>([]);
  get data(): Contact[] {
    return this.dataChange.value;
  }

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.addContact(i);
    }
  }

  /** Adds a new user to the database. */
  addContact(index) {
    const copiedData = this.data.slice();
    copiedData.push(this.createNewUser(index));
    this.dataChange.next(copiedData);
  }

  /** Builds and returns a new User. */
  private createNewUser(index: number): Contact {
    return {
      name: this.generateName(),
      firstname: 'Henrique',
      lastname: 'Abud',
      email: this.generateName() + '@gmail.com',
      mobile: '+6149495586',
      homePhone: '+6149495586',
      workPhone: '+6149495586',
      role: Role.Adult
    };
  }

  generateName(): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
