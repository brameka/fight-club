import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from 'app/+crm/clients/list/clients.component';
import { ClientComponent } from 'app/+crm/clients/client.component';
import { CreateClientInitialComponent } from 'app/+crm/clients/form/create-client-initial.component';



const routes: Routes = [
  {
    path: '',
    component: ClientsComponent
  },
  { path: ':id',
    component: ClientComponent,
    // children: [
    //   {
    //     path: '',
    //     component: CustomerComponent
    //   }
    //   {
    //     path: 'clients',
    //     component: ClientsComponent
    //   },
    //   {
    //     path: 'insurance',
    //     component: InsuranceComponent
    //   },
    //   {
    //     path: 'loans',
    //     component: LoansComponent
    //   },
    //   {
    //     path: 'financials',
    //     component: FinancialComponent
    //   }
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
