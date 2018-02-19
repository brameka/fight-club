import { Component, AfterViewInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home-loan',
  template: `
    <div class="app-home-loan__row row">
        <div class="app-home-loan__col col-6">
            <div class="form-group">
                <label for="name">Bank</label>
                <input type="text" class="form-control" placeholder="Bank">
            </div>
        </div>
        <div class="app-home-loan__col--end col-6">
            <div class="form-group">
                <label for="name">Start Date</label>
                <input type="text" class="form-control" placeholder="Start Date">
            </div>
        </div>
    </div>
    <div class="app-home-loan__row row">
        <div class="app-home-loan__col col-6">
            <div class="form-group">
                <label for="name">Limit</label>
                <input type="text" class="form-control" placeholder="Limit">
            </div>
        </div>
        <div class="app-home-loan__col--end col-6">
            <div class="form-group">
                <label for="name">Balance</label>
                <input type="text" class="form-control" placeholder="Balance">
            </div>
        </div>
    </div>
  `,
  styleUrls: ['./home-loan.component.scss']
})
export class HomeLoanComponent implements AfterViewInit {
  state: any;

  roles: any[] = [
    'Adult',
    'Child',
    'Other',
    'Guarantor',
    'Policy Owner'
  ];

  frequency: any[] = [
    'Weekly',
    'Fortnightly',
    'Monthly',
    'Yearly'
  ];

  genders: any[] = [ 'Male', 'Female' ];

  constructor (private formBuilder: FormBuilder) { }

  ngAfterViewInit() {
  }

}
