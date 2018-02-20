import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialComponentsModule } from '../ui/material.module';
import { UiComponentsModule } from '../ui/ui-components.module';
import { CrmRoutingModule } from './crm-routing.module';
import { ClientsComponent } from './clients/list/clients.component';
import { CreateClientComponent } from './clients/form/create-client.component';

import { ClientsDialogComponent } from './clients/dialog/clients-dialog.component';
import { CreateClientDialogComponent } from './clients/dialog/create-dialog.component';
import { ClientComponent } from './clients/client.component';
import { ClientSetupComponent } from './clients/client-setup.component';

import { ContactsComponent } from './contacts/list/contacts.component';
import { CreateContactDialogComponent } from './contacts/dialog/create-contact-dialog.component';
import { CreateContactComponent } from './contacts/form/create-contact.component';

import { CreateFinancialsComponent } from './financials/form/create-financials.component';
import { HomeLoanComponent } from './financials/form/home-loan.component';

import { ContactService } from './services/contact.service';
import { ClientService } from './services/client.service';
import { CrmStateModule } from './state/crm-state.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const components = [
  ClientsComponent,
  ClientsDialogComponent,
  CreateClientDialogComponent,
  CreateClientComponent,
  ClientComponent,
  ContactsComponent,
  CreateContactDialogComponent,
  CreateContactComponent,
  ClientSetupComponent,
  CreateFinancialsComponent,
  HomeLoanComponent
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
    NgbModule.forRoot()
  ],
  providers: [
    ...services
  ],
  declarations: [...components],
  entryComponents: [
    ClientsDialogComponent,
    CreateClientDialogComponent,
    CreateContactDialogComponent
  ]
})
export class CrmModule { }
