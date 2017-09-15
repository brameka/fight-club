import { Component, OnDestroy, ViewEncapsulation  } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnDestroy {
  title = 'app';
  private sub: any;
  notifications: any;

  constructor (private slimLoader: SlimLoadingBarService, private router: Router) {
    // this.slimLoader.color = 'firebrick';
    this.slimLoader.color = 'blue';
    this.sub = this.router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
            this.slimLoader.start();
        } else if ( event instanceof NavigationEnd ||
                    event instanceof NavigationCancel ||
                    event instanceof NavigationError) {
            this.slimLoader.complete();
        }
    }, (error: any) => {
        this.slimLoader.complete();
    });

    this.notifications = [
      {
        title: 'Notification',
        message: 'This is a message',
        action: 'This is a action',
        priority: 1
      },
      {
        title: 'Notification',
        message: 'This is a message',
        action: 'This is a action',
        priority: 1
      },
      {
        title: 'Notification',
        message: 'This is a message',
        action: 'This is a action',
        priority: 1
      }
    ];
  }

  dash () {
    this.router.navigateByUrl('/dash');
  }

  ngOnDestroy(): any {
      this.sub.unsubscribe();
  }

  updateNotifications () {

  }

}
