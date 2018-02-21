import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from 'app/+crm/clients/list/clients.component';
import { ClientContainerComponent } from 'app/+crm/clients/client-container.component';
import { ClientComponent } from 'app/+crm/clients/client.component';
import { CreateContactComponent } from './contacts/form/create-contact.component';
import { ContactsComponent } from './contacts/list/contacts.component'; 

import { FinancialsComponent } from 'app/+crm/financials/financials.component';
import { CreateFinancialsComponent } from 'app/+crm/financials/form/create-financials.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent
  },
  { path: ':id',
    children: [
      {
        path: '',
        component: ClientContainerComponent,
        children: [
          {
            path: 'overview',
            component: ClientComponent
          },
          {
            path: 'contacts',
            component: ContactsComponent
          },

          {
            path: 'create-contact',
            component: CreateContactComponent
          },
          {
            path: 'financials',
            component: FinancialsComponent
          },
          {
            path: 'create-financials',
            component: CreateFinancialsComponent
          }
        ]
        
      },
     
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
