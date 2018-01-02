import { Component, ViewEncapsulation  } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as customerActions from './state/customer/customer.actions';
import * as actions from './state/app/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  private sub: any;
  styles = {};
  location: string;
  title: string;
  state$: Observable<any>;

  constructor (
    private slimLoader: SlimLoadingBarService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<Object>
  ) {
    this.state$ = this.store.select(state => state);
  }
}
