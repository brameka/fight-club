import { Component, ViewEncapsulation, OnDestroy, ViewChild  } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnDestroy {
  @ViewChild('sidenav') sidenav: MatSidenav;
  private sub: any;
  styles = {};
  location: string;
  title: string;
  status: 'customers'|'customer'|'scheduler'|'default';

  constructor (private slimLoader: SlimLoadingBarService, private router: Router) {
    this.sub = this.router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
            this.slimLoader.start();
        } else if ( event instanceof NavigationEnd ||
                    event instanceof NavigationCancel ||
                    event instanceof NavigationError) {
            this.location = router.url;
            console.log('router: ', router);
            this.setStyles();
        }
    }, (error: any) => {
        // this.slimLoader.complete();
    });
  }

  setStyles() {
    switch (this.location) {
      case '/dash': {
        this.title = 'Scheduler';
        this.styles = {
          'margin-top': '110px'
        };
        this.status = 'scheduler';
      }
      break;

      case '/customers': {
        this.title = 'Customers';
        this.styles = {
          'margin-top': '64px'
        };
        this.status = 'customers';
      }
      break;

      case '/customers/1': {
        this.title = 'Customer';
        this.styles = {
          'margin-top': '110px'
        };
        this.status = 'customer';
      }
      break;

      default: {
        this.title = 'Schedules';
        this.styles = {
          'margin-top': '64px'
        };
        this.status = 'default';
      }
    }
  }

  ngOnDestroy(): any {
      this.sub.unsubscribe();
  }

  toggle () {
    this.sidenav.toggle();
  }
}
