import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/list/contacts.component';
import { ContactContainerComponent } from './contacts/contact-container.component';


const routes: Routes = [
  {
    path: '',
    component: ContactsComponent
  }
  // { path: 'customers/:id',
  //   component: CustomerContainerComponent,
  //   children: [
      // {
      //   path: '',
      //   component: CustomerComponent
      // }
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
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
