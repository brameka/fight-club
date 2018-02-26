import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { MatDialog, MatSort, MatDialogRef } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as actions from 'app/+crm/state/clients/client.actions';
import * as app from 'app/state/app/app.actions';

@Component({
  selector: 'app-client-container',
  template: `
    <router-outlet></router-outlet>
  `
})
export class ClientContainerComponent {
  id: string;
  state$: Observable<any>;
  app$: Observable<any>;
  routeSubscription: Subscription;

  constructor(private slimService: SlimLoadingBarService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private store: Store<any>) {
      this.slimService.start();
      this.state$ = this.store.select(state => state.crm.clients);
      this.app$ = this.store.select(state => state.app);
      this.app$.subscribe(x => {
          switch(x.index) { 
            case 0: { 
                this.router.navigate(['overview'], { relativeTo: this.route });
                break; 
            } 
            case 1: { 
                this.router.navigate(['contacts'], { relativeTo: this.route });
                break; 
            } 
            case 2: { 
                this.router.navigate(['financials'], { relativeTo: this.route });
                break; 
            }
            case 3: { 
                this.router.navigate(['protection'], { relativeTo: this.route });
                break; 
            }
            case 4: { 
                this.router.navigate(['investment'], { relativeTo: this.route });
                break; 
            }

            default: { 
                this.router.navigate(['create-financials'], { relativeTo: this.route });
                break; 
            } 
        }
      });
      
      this.routeSubscription = this.route.params.subscribe(params => {
        this.id = params['id']; // (+) converts string 'id' to a number
        this.getClient(this.id);
      });

      this.store.dispatch(new app.ShowState({
        state: 'client',
        title: 'Client',
        top: '110px'
      }));
  }

  getClient(id: string) {
    this.store.dispatch(new actions.GetClient({id}));
  }
}
