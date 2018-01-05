import { Component, ViewChild } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatSort, MatDialogRef } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as actions from '../../../state/financial/financial.actions';


@Component({
  selector: 'app-financial',
  styleUrls: ['financials.component.scss'],
  templateUrl: 'financials.component.html',
})
export class FinancialComponent {
  state$: Observable<any>;

  constructor(private slimService: SlimLoadingBarService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private store: Store<any>) {
      this.slimService.start();
      this.store.dispatch(new actions.GetFinancials({ id: 1 }));
      this.state$ = this.store.select(state => state);
  }

}
