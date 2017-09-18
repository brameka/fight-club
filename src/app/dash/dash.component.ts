import { Component, OnInit, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MdSidenav;
  notifications: any[];
  constructor() { 
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

  toggle () {
    this.sidenav.toggle();
  }

}
