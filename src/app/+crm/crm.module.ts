import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialComponentsModule } from '../ui/material.module';
import { UiComponentsModule } from '../ui/ui-components.module';
import { CrmRoutingModule } from './crm-routing.module';
import { CustomerContainerComponent } from './customers/customer-container.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customers/customer.component';
import { CustomerFormComponent } from './customers/customer-form.component';
import { CustomerCreateDialogComponent } from './customers/customer-create-dialog-component';
import { NotesComponent } from './customers/notes.component';
import { ContactService } from './services/contact.service';
import { CustomerService } from './services/customer.service';
import { CrmStateModule } from './state/crm-state.module';

const components = [
  CustomersComponent,
  CustomerContainerComponent,
  CustomerComponent,
  CustomerFormComponent,
  CustomerCreateDialogComponent,
  NotesComponent,
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
  declarations: []
})
export class CrmModule { }
