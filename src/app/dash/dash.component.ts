import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  notifications: any[];

  cards: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  constructor(private slimLoadingBarService: SlimLoadingBarService) {
    this.notifications = [
      {
        title: 'Notification',
        message: 'This is a message',
        action: 'This is a action',
        priority: 1
      },
      {
        title: 'Notification',
        message: 'This is a message',
        action: 'This is a action',
        priority: 1
      },
      {
        title: 'Notification',
        message: 'This is a message',
        action: 'This is a action',
        priority: 1
      }
    ];
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.slimLoadingBarService.complete();
  }

  toggle () {
    this.sidenav.toggle();
  }

  startLoading() {
      this.slimLoadingBarService.start(() => {
          console.log('Loading complete');
      });
  }

  stopLoading() {
      this.slimLoadingBarService.stop();
  }

  completeLoading() {
      this.slimLoadingBarService.complete();
  }

}
