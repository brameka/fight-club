import { Component, ViewEncapsulation, OnDestroy, ViewChild  } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as customerActions from '../../state/customer/customer.actions';
import * as actions from '../../state/app/app.actions';

@Component({
  selector: 'app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppContainerComponent implements OnDestroy {
  @ViewChild('sidenav') sidenav: MatSidenav;
  private sub: any;
  styles = {};
  location: string;
  title: string;
  status: 'login'|'register'|'app' = 'app';
  state$: Observable<any>;

  constructor (
    private slimLoader: SlimLoadingBarService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<Object>
  ) {
    this.state$ = this.store.select(state => state);

    this.sub = this.router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
            this.slimLoader.start();
        } else if ( event instanceof NavigationEnd ||
                    event instanceof NavigationCancel ||
                    event instanceof NavigationError) {
            this.location = router.url;
        }
    }, (error: any) => {
        // this.slimLoader.complete();
    });
  }

  ngOnDestroy(): any {
    if (this.sub) {
      // this.sub.unsubscribe();
    }
  }

  toggle () {
    this.sidenav.toggle();
  }

  selectedIndexChange(event: any) {
    this.store.dispatch(new customerActions.ChangeRoute(event));
  }
}