import { Component } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as actions from '../../../state/contacts/contact.actions';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  state$: Observable<any>;

  constructor(
    private slimService: SlimLoadingBarService,
    private store: Store<Object>) {
    this.load();
    this.state$ = this.store.select(state => state);
  }

  load() {
    this.store.dispatch(new actions.GetContacts({ id: 1 }));
  }

  save() {
  }

}
