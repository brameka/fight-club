import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnChanges, OnDestroy, OnInit {
  @Output() update = new EventEmitter();
  @Input() placeholder: string;
  searchField: FormControl;
  form: FormGroup;

  constructor (private router: Router, private formBuilder: FormBuilder) {
    this.searchField = new FormControl();
    this.form = formBuilder.group({search: this.searchField});

    this.searchField.valueChanges
    .debounceTime(500)
    .distinctUntilChanged()
    .subscribe(term => {
      this.update.emit(term);
    });

    // this.searchField.valueChanges
    // .debounceTime(400)
    //   .switchMap(term => this.searchService.search(term))
    //   .subscribe((result) => {
    //       this.result = result.artists.items
    //   });

  }

  ngOnInit () {
  }

  ngOnDestroy () {
  }

  ngOnChanges () {
  }

}
