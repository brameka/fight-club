import { Component, Output, Input, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-insurance-summary',
  templateUrl: './insurance-summary.component.html',
  styleUrls: ['./insurance-summary.component.scss']
})
export class InsuranceSummaryComponent implements AfterViewInit {
  @Output() update = new EventEmitter();

  items = [{
    title: 'Partners Life - Mortgage Repayment Cover ($4,061 Monthly)',
  }, {
    title: 'Partners Life - Mortgage Repayment Cover ($4,061 Monthly)',
  }, {
    title: 'Partners Life - Mortgage Repayment Cover ($4,061 Monthly)',
  }, {
    title: 'Partners Life - Mortgage Repayment Cover ($4,061 Monthly)',
  }, {
    title: 'Partners Life - Mortgage Repayment Cover ($4,061 Monthly)',
  }]

  constructor() {}

  ngAfterViewInit() {
  }

  show() {
    this.update.emit();
  }
}
