import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialComponentsModule } from '../ui/material.module';
import { AppContainerComponent } from './app/app-container.component';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';

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
  InsuranceComponent,
  LoansDialogComponent,
  LoansComponent,
  LoansGeneralFormComponent,
  FinancialComponent
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
    LoansDialogComponent
  ]
})
export class ComponentsModule {}
