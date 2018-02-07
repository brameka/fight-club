import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatSort, MatDialogRef } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { LoansDialogComponent } from '../dialog/loans-dialog.component';
import * as app from '../../../state/app/app.actions';

@Component({
  selector: 'app-loans',
  styleUrls: ['loans.component.scss'],
  templateUrl: 'loans.component.html',
})
export class LoansComponent {
  state$: Observable<any>;
  dialogRef: MatDialogRef<LoansDialogComponent>;

  constructor(private slimService: SlimLoadingBarService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private store: Store<any>) {
      this.slimService.start();
      this.store.dispatch(new app.ShowState({
        title: 'Loans',
        state: 'contact',
        subState: '',
        margin: '110px',
        menuColor: 'primary',
        loadingColor: '#fff'
      }));
      // this.store.dispatch(new actions.GetLoans({ id: 1 }));
      this.state$ = this.store.select(state => state);
  }

  create (): void {
    const width = '800px';
    this.dialogRef = this.dialog.open(LoansDialogComponent, {
      width: width,
      panelClass: 'app-loans__panel'
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
