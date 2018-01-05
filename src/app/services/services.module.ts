import { NgModule } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { NotificationService } from './notification.service';
import { CustomerService } from './customer.service';
import { ContactService } from './contact.service';
import { LoanService } from './loan.service';
import { InsuranceService } from './insurance.service';
import { FinancialService } from './financial.service';

const services = [
  AuthenticationService,
  UserService,
  NotificationService,
  CustomerService,
  ContactService,
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
