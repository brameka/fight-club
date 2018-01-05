import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Insurance, InsuranceType, Frequency } from '../models/insurance';

@Injectable()
export class InsuranceService {
  private insurance: Insurance = {
    name: 'Henrique',
    type: InsuranceType.Life,
    excess: '$1000',
    insurer: 'Partners Life',
    policyNumber: '872345',
    commencementDate: '23 Jun 2017',
    premiums: 3.11,
    frequency: Frequency.Weekly
  };
  private insurances$: Observable<Insurance[]>;
  private insurance$: Observable<Insurance>;

  constructor() {}

  getInsurances(payload: any): Observable<Insurance[]> {
    const insurances = [];
    for (let i = 0; i < 3; i++) {
      insurances.push(this.insurance);
    }
    this.insurances$ = Observable.of(insurances);
    return this.insurances$;
  }

  getInsurance(id: string): Observable<Insurance> {
    this.insurance$ = Observable.of(this.insurance);
    return this.insurance$;
  }
}
