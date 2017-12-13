import { NgModule } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { NotificationService } from './notification.service';

const services = [
  AuthenticationService,
  UserService,
  NotificationService
];

@NgModule({
  providers: [
    ...services
  ]
})
export class ServicesModule {}
