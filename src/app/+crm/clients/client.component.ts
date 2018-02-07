import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as actions from 'app/+crm/state/clients/client.actions';
import * as app from 'app/state/app/app.actions';

@Component({
  selector: 'app-client',
  styleUrls: ['client.component.scss'],
  templateUrl: 'client.component.html',
})
export class ClientComponent {
  id: string;
  state$: Observable<any>;
  routeSubscription: Subscription;

  constructor(private slimService: SlimLoadingBarService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<any>) {
      this.slimService.start();
      this.state$ = this.store.select(state => state.crm.clients);
      this.state$.subscribe(x => {
        console.log('state: ', x);
      });
      this.routeSubscription = this.route.params.subscribe(params => {
        this.id = params['id']; // (+) converts string 'id' to a number
        this.getClient(this.id);
      });
  }

  getClient(id: string) {
    this.store.dispatch(new actions.GetClient({id}));
  }
}
