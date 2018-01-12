import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialComponentsModule } from '../ui/material.module';
import { UiComponentsModule } from '../ui/ui-components.module';
import { CrmRoutingModule } from './crm-routing.module';
import { ContactsComponent } from './contacts/list/contacts.component';
import { ContactContainerComponent } from './contacts/contact-container.component';
import { CreateContactFormComponent } from './contacts/form/create-contact-form.component';
import { CreateContactDialogComponent } from './contacts/dialog/create-contact-dialog-component';
import { NotesComponent } from './customers/notes.component';
import { ContactService } from './services/contact.service';
import { CustomerService } from './services/customer.service';
import { CrmStateModule } from './state/crm-state.module';

const components = [
  ContactsComponent,
  ContactContainerComponent,
  CreateContactFormComponent,
  CreateContactDialogComponent,
  NotesComponent
];

const services = [
  CustomerService,
  ContactService
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialComponentsModule,
    UiComponentsModule,
    CrmRoutingModule,
    CrmStateModule
  ],
  providers: [
    ...services
  ],
  declarations: [...components],
  entryComponents: [
    CreateContactDialogComponent
  ]
})
export class CrmModule { }
