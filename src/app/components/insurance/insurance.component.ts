import { Component, AfterViewInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements AfterViewInit  {
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
  ];

  constructor(private slimService: SlimLoadingBarService, private router: Router, public dialog: MatDialog) {}

  ngAfterViewInit() {
    this.slimService.complete();
  }

  create (): void {
    // const width = '800px';
    // const ref = this.dialog.open(CustomerCreateDialogComponent, {
    //   width: width
    // });

    // ref.afterClosed().subscribe(result => {
    // });
  }

  details(customer: any) {
    this.router.navigate(['/customers/', customer.id]);
  }
}
