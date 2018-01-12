import { Routes, RouterModule } from '@angular/router';
import { AppContainerComponent } from './components/app/app-container.component';
import { LoginComponent } from './components/login/login.component';
import { DashComponent } from './components/dash/dash.component';
import { AuthGuard } from './guards/auth.guard';

import { InsuranceComponent } from './components/insurance/list/insurance.component';
import { LoansComponent } from './components/loans/list/loans.component';
import { FinancialComponent } from './components/financials/list/financials.component';

const appRoutes: Routes = [

    // { path: '', component: CustomersComponent },
    {   path: '',
        redirectTo: '/app',
        pathMatch: 'full'
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: LoginComponent },
    {
      path: 'app',
      component: AppContainerComponent,
      children: [
        // {
        //   path: '',
        //   component: CustomersComponent
        // },
        {
          path: '',
          redirectTo: 'dashboard',
          pathMatch: 'full'
        },
        {
          path: 'dashboard',
          loadChildren: 'app/+dashboard/dashboard.module#DashboardModule'
        },
        {
          path: 'users',
          loadChildren: 'app/+users/users.module#UsersModule'
        },
        {
          path: 'contacts',
          loadChildren: 'app/+crm/crm.module#CrmModule'
        }
      ]
    },
    { path: '**', redirectTo: '' }
    // {   path: '',
    //     redirectTo: '/users',
    //     pathMatch: 'full'
    // },
    // { path: 'dash', component: DashComponent, canActivate: [AuthGuard] },

];

export const routes = RouterModule.forRoot(appRoutes, { useHash: true });
