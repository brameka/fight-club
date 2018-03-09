import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from 'app/+crm/clients/list/clients.component';
import { ClientContainerComponent } from 'app/+crm/clients/client-container.component';
import { ClientComponent } from 'app/+crm/clients/client.component';
import { CreateContactComponent } from './contacts/form/create-contact.component';
import { ContactsComponent } from './contacts/list/contacts.component'; 

import { FinancialsComponent } from 'app/+crm/financials/financials.component';
import { CreateFinancialsComponent } from 'app/+crm/financials/form/create-financials.component';

import { CurrentProtectionComponent } from 'app/+crm/protection/form/current-protection.component';
import { FutureProtectionComponent } from 'app/+crm/protection/form/future-protection.component';
import { ProtectionComponent } from 'app/+crm/protection/protection.component';

import { PreferencesComponent } from 'app/+crm/investment/form/preferences.component';

import { FactFinderComponent } from './clients/form/fact-finder.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent
  },
  {
    path: 'fact-finder',
    component: FactFinderComponent
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
            children: [
              {
                path: '',
                component: ContactsComponent
              },
              {
                path: 'create-contact',
                component: CreateContactComponent
              }
            ]
          },
          {
            path: 'financials',
            children: [
              {
                path: '',
                component: FinancialsComponent
              },
              {
                path: 'create-financials',
                component: CreateFinancialsComponent
              }
            ]
          },
          {
            path: 'protection',
            children: [
              {
                path: '',
                component: ProtectionComponent
              },
              {
                path: 'current-protection',
                component: CurrentProtectionComponent
              },
              {
                path: 'future-protection',
                component: FutureProtectionComponent
              }
            ]
          },
          {
            path: 'investment',
            children: [
              {
                path: '',
                component: PreferencesComponent
              },
              {
                path: 'preferences',
                component: PreferencesComponent
              }
            ]
          },



          
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
