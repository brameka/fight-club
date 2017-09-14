import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnChanges, OnDestroy, OnInit {
  @Output() update = new EventEmitter();

  constructor (private router: Router) {}

  ngOnInit () {
  }

  ngOnDestroy () {
  }

  ngOnChanges () {
  }

}
