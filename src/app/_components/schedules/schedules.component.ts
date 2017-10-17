import { Component, AfterViewInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements AfterViewInit  {

  constructor(private slimService: SlimLoadingBarService) {}

  ngAfterViewInit(): void {
    this.slimService.complete();
  }
}
