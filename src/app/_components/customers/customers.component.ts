import { Component, AfterViewInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements AfterViewInit  {
  contacts: any[] = [
    {
      id: 1,
      name: 'Incredible Hulk'
    }, {
      id: 2,
      name: 'Brad Pitt'
    }, {
      id: 3,
      name: 'Colin Farrell'
    }
  ]

  constructor(private slimService: SlimLoadingBarService, private router: Router) {}

  ngAfterViewInit() {
    this.slimService.complete();
  }

  ngOnInit() {
    // Observable.fromEvent(this.filter.nativeElement, 'keyup')
    //     .debounceTime(150)
    //     .distinctUntilChanged()
    //     .subscribe(() => {
    //       if (!this.dataSource) { return; }
    //       this.dataSource.filter = this.filter.nativeElement.value;
    //     });
  }

  details(customer: any) {
    this.router.navigate(['/customers/', customer.id]);
  }
}
