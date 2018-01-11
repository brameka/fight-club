import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialComponentsModule } from '../ui/material.module';
import { AppContainerComponent } from './app/app-container.component';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { CustomerContainerComponent } from './customers/customer-container.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customers/customer.component';
import { CustomerFormComponent } from './customers/customer-form.component';
import { CustomerCreateDialogComponent } from './customers/customer-create-dialog-component';
import { NotesComponent } from './customers/notes.component';
import { ClientsComponent } from './contacts/clients/clients.component';
import { ClientsTableComponent } from './contacts/clients/clients-table.component';
import { AutoresizeDirective } from '../directives/autoresize.directive';
import { InsuranceComponent } from './insurance/list/insurance.component';
import { UiComponentsModule } from '../ui/ui-components.module';

import { LoansDialogComponent } from '../components/loans/dialog/loans-dialog.component';
import { LoansComponent } from '../components/loans/list/loans.component';
import { LoansGeneralFormComponent } from '../components/loans/form/general/loans-general-form.component';

import { FinancialComponent } from './financials/list/financials.component';



const components = [
  AppContainerComponent,
  DashComponent,
  LoginComponent,
  CustomersComponent,
  CustomerContainerComponent,
  CustomerComponent,
  CustomerFormComponent,
  CustomerCreateDialogComponent,
  NotesComponent,
  ClientsComponent,
  ClientsTableComponent,
  InsuranceComponent,
  LoansDialogComponent,
  LoansComponent,
  LoansGeneralFormComponent,
  FinancialComponent,
  AutoresizeDirective
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialComponentsModule,
    UiComponentsModule
  ],
  declarations: [ ...components ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...components,
  ],
  entryComponents: [
    CustomerCreateDialogComponent,
    LoansDialogComponent
  ]
})
export class ComponentsModule {}
