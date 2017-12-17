import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialComponentsModule } from '../ui/material.module';

import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users.component';
import { DayCalendarComponent } from './calendar/day-calendar.component';
import { CalendarBlockComponent } from './calendar/calendar-block.component';
import { CalendarDraggableDirective } from './calendar/calendar-draggable';
import { CalendarCellComponent } from './calendar/calendar-cell.component';
import { CalendarBarComponent } from './calendar/calendar-bar.component';
import { CalendarActionsComponent } from './calendar/calendar-actions.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customers/customer.component';
import { CustomerFormComponent } from './customers/customer-form.component';
import { CustomerCreateDialogComponent } from './customers/customer-create-dialog-component';
import { NotesComponent } from './customers/notes.component';
import { BlockDialogComponent } from './calendar/calendar-block.component';
import { DragComponent } from './drag.component';
import { AutoresizeDirective } from '../directives/autoresize.directive';

import { InsuranceSummaryComponent } from './insurance/insurance-summary.component';
import { TableSpikeComponent } from './insurance/table-spike.component';
import { InsuranceComponent } from './insurance/insurance.component';

const components = [
  DashComponent,
  LoginComponent,
  UsersComponent,
  CustomersComponent,
  CustomerComponent,
  CustomerFormComponent,
  CustomerCreateDialogComponent,
  NotesComponent,
  InsuranceSummaryComponent,
  InsuranceComponent,
  TableSpikeComponent,
  AutoresizeDirective
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialComponentsModule
  ],
  declarations: [ ...components ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...components,
  ],
  entryComponents: [
    CustomerCreateDialogComponent
  ]
})
export class ComponentsModule {}
