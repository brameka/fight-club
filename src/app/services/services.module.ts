import { NgModule } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { NotificationService } from './notification.service';
import { LoanService } from './loan.service';
import { InsuranceService } from './insurance.service';
import { FinancialService } from './financial.service';

const services = [
  AuthenticationService,
  UserService,
  NotificationService,
  LoanService,
  InsuranceService,
  FinancialService
];

@NgModule({
  providers: [
    ...services
  ]
})
export class ServicesModule {}
