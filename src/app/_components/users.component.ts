import { Component, OnInit, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  model = {
    left: true,
    middle: false,
    right: false
  };
  
  constructor() {
  }

  ngOnInit() {
  }

  toggle () {
  }

}
