import { NgModule } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { NotificationService } from './notification.service';
import { CustomerService } from './customer.service';
import { ContactService } from './contact.service';

const services = [
  AuthenticationService,
  UserService,
  NotificationService,
  CustomerService,
  ContactService
];

@NgModule({
  providers: [
    ...services
  ]
})
export class ServicesModule {}
