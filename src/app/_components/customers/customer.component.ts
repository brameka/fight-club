import { Component, AfterViewInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements AfterViewInit  {
    contact: any = {
        id: 3,
        name: 'Colin Farrell'
    };

    constructor(private slimService: SlimLoadingBarService) {}

    ngAfterViewInit() {
        this.slimService.complete();
    }

    ngOnInit() {

    }
}
