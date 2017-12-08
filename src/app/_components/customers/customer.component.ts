import { Component, AfterViewInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements AfterViewInit  {

    mode: 'static'|'edit' = 'static';

    contact: any = {
        id: 3,
        name: 'Colin Farrell'
    };

    constructor(private slimService: SlimLoadingBarService) {}

    ngAfterViewInit() {
        this.slimService.complete();
    }

    status() {
        if (this.mode === 'static') {
            this.mode = 'edit';
        } else {
            this.mode = 'static';
        }
    }
}
