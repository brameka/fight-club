import { Component, AfterViewInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements AfterViewInit  {

  items: any[] = [1, 2, 3, 4, 5];

  constructor(private slimService: SlimLoadingBarService) {}

  ngAfterViewInit(): void {
    this.slimService.complete();
  }
}
