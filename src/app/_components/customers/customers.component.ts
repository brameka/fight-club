import { Component, AfterViewInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements AfterViewInit  {

  constructor(private slimService: SlimLoadingBarService) {}

  ngAfterViewInit(): void {
    this.slimService.complete();
  }
}
