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

import { IncomeDialogComponent } from './dialog/income-dialog.component';
import { ExpenseDialogComponent } from './dialog/expense-dialog.component';

@Component({
  selector: 'app-financials',
  styleUrls: ['financials.component.scss'],
  templateUrl: 'financials.component.html',
})
export class FinancialsComponent implements AfterViewInit {
  state$: Observable<any>;
  app$: Observable<any>;
  expenseDialog: MatDialogRef<ExpenseDialogComponent>;
  incomeDialog: MatDialogRef<IncomeDialogComponent>;

  constructor(private slimService: SlimLoadingBarService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private store: Store<any>) {

    }

    ngAfterViewInit() {
        this.slimService.complete();
    }

    createIncome() {
        const width = '800px';
        this.incomeDialog = this.dialog.open(IncomeDialogComponent, {
          width: width,
          panelClass: 'app-dialog__panel'
        });
        this.incomeDialog.afterClosed().subscribe(result => {
          // this.store.dispatch(new actions.CloseDialogSuccess());
        });
    }

    createExpense() {
        const width = '800px';
        this.expenseDialog = this.dialog.open(ExpenseDialogComponent, {
          width: width,
          panelClass: 'app-dialog__panel'
        });
        this.expenseDialog.afterClosed().subscribe(result => {
          // this.store.dispatch(new actions.CloseDialogSuccess());
        });
    }
}