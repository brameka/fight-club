import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from 'app/+crm/clients/list/clients.component';
import { ClientComponent } from 'app/+crm/clients/client.component';
import { CreateClientInitialComponent } from 'app/+crm/clients/form/create-client-initial.component';
import { CreateContactComponent } from './contacts/form/create-contact.component';
import { ClientSetupComponent } from 'app/+crm/clients/client-setup.component';
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
        component: ClientComponent
      },
      {
        path: 'new',
        component: ClientSetupComponent
      },
      {
        path: 'create',
        component: CreateContactComponent
      },
      {
        path: 'create-financials',
        component: CreateFinancialsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
