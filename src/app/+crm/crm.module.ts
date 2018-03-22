import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialComponentsModule } from '../ui/material.module';
import { UiComponentsModule } from '../ui/ui-components.module';
import { CrmRoutingModule } from './crm-routing.module';
import { ClientsComponent } from './clients/list/clients.component';
import { CreateClientComponent } from './clients/form/create-client.component';

import { ClientsDialogComponent } from './clients/dialog/clients-dialog.component';
import { CreateClientDialogComponent } from './clients/dialog/create-dialog.component';

import { ClientContainerComponent } from './clients/client-container.component';
import { ClientComponent } from './clients/client.component';

import { ContactsComponent } from './contacts/list/contacts.component';
import { CreateContactDialogComponent } from './contacts/dialog/create-contact-dialog.component';
import { CreateContactComponent } from './contacts/form/create-contact.component';

import { FinancialsComponent } from 'app/+crm/financials/financials.component';
import { CreateFinancialsComponent } from './financials/form/create-financials.component';

import { IncomeDialogComponent } from 'app/+crm/financials/dialog/income-dialog.component';
import { ExpenseDialogComponent } from 'app/+crm/financials/dialog/expense-dialog.component';
import { AssetDialogComponent } from 'app/+crm/financials/dialog/asset-dialog.component';
import { LiabilityDialogComponent } from 'app/+crm/financials/dialog/liability-dialog.component';

import { CurrentProtectionComponent } from './protection/form/current-protection.component';
import { FutureProtectionComponent } from './protection/form/future-protection.component';
import { ProtectionComponent } from './protection/protection.component';
import { CreateProtectionDialogComponent } from './protection/dialog/create-protection-dialog.component';

import { PreferencesComponent } from './investment/form/preferences.component';

import { ContactService } from './services/contact.service';
import { ClientService } from './services/client.service';
import { CrmStateModule } from './state/crm-state.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FactFinderComponent } from './facts/fact-finder.component';
import { FactContactsComponent } from './facts/contacts/fact-contacts.component';
import { FactFinancialsComponent } from './facts/financials/fact-financials.component';
import { FactPreferencesComponent } from './facts/preferences/fact-preferences.component';
import { FactProtectionComponent } from './facts/protection/fact-protection.component';
import { FactMenuComponent } from './facts/menu/fact-menu.component';

const components = [
  ClientsComponent,
  ClientsDialogComponent,
  CreateClientDialogComponent,
  CreateClientComponent,
  ClientContainerComponent,
  ClientComponent,
  ContactsComponent,
  CreateContactDialogComponent,
  CreateContactComponent,
  CreateFinancialsComponent,
  FinancialsComponent,
  IncomeDialogComponent,
  ExpenseDialogComponent,
  AssetDialogComponent,
  LiabilityDialogComponent,
  CurrentProtectionComponent,
  FutureProtectionComponent,
  ProtectionComponent,
  CreateProtectionDialogComponent,
  PreferencesComponent,
  FactFinderComponent,
  FactContactsComponent,
  FactFinancialsComponent,
  FactPreferencesComponent,
  FactProtectionComponent,
  FactMenuComponent
];

const services = [
  ContactService,
  ClientService
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialComponentsModule,
    UiComponentsModule,
    CrmRoutingModule,
    CrmStateModule,
    NgxDatatableModule,
    NgbModule.forRoot()
  ],
  providers: [
    ...services
  ],
  declarations: [...components],
  entryComponents: [
    ClientsDialogComponent,
    CreateClientDialogComponent,
    CreateContactDialogComponent,
    IncomeDialogComponent,
    ExpenseDialogComponent,
    AssetDialogComponent,
    LiabilityDialogComponent,
    CreateProtectionDialogComponent
  ]
})
export class CrmModule { }
