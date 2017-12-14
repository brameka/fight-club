import { NgModule } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { NotificationService } from './notification.service';
import { CustomerService } from './customer.service';

const services = [
  AuthenticationService,
  UserService,
  NotificationService,
  CustomerService
];

@NgModule({
  providers: [
    ...services
  ]
})
export class ServicesModule {}
