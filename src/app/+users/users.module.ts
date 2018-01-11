import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialComponentsModule } from '../ui/material.module';
import { UiComponentsModule } from '../ui/ui-components.module';
import { UsersComponent } from './list/users.component';
import { UsersDialogComponent } from './dialog/users-dialog.component';
import { CreateUsersDialogComponent } from './dialog/create-users-dialog.component';
import { CreateUserComponent } from './form/create-user.component';
import { UsersRoutingModule } from './users-routing.module';

const components = [
  UsersComponent,
  UsersDialogComponent,
  CreateUserComponent,
  CreateUsersDialogComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialComponentsModule,
    UiComponentsModule,
    UsersRoutingModule
  ],
  declarations: [...components],
  entryComponents: [
    CreateUsersDialogComponent
  ]
})
export class UsersModule { }
