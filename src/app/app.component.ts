import { Component, ViewEncapsulation, OnDestroy  } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnDestroy {
  private sub: any; 

  constructor (private slimLoader: SlimLoadingBarService, private router: Router) { 
    this.sub = this.router.events.subscribe(event => {

        console.info(event, '<-- subscribe func');


        if (event instanceof NavigationStart) {

            this.slimLoader.start();

        } else if ( event instanceof NavigationEnd ||
                    event instanceof NavigationCancel ||
                    event instanceof NavigationError) {

            //this.slimLoader.complete();

        }
    }, (error: any) => {
        //this.slimLoader.complete();
    });
  }

  

  ngOnDestroy(): any {
      this.sub.unsubscribe();
  }
}
