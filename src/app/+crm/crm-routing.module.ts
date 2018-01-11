import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customers/customer.component';
import { CustomerContainerComponent } from './customers/customer-container.component';



const routes: Routes = [
  {
    path: '',
    component: CustomersComponent
  },
  { path: 'customers/:id',
    component: CustomerContainerComponent,
    children: [
      {
        path: '',
        component: CustomerComponent
      }
      // {
      //   path: 'clients',
      //   component: ClientsComponent
      // },
      // {
      //   path: 'insurance',
      //   component: InsuranceComponent
      // },
      // {
      //   path: 'loans',
      //   component: LoansComponent
      // },
      // {
      //   path: 'financials',
      //   component: FinancialComponent
      // }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
