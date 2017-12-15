import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashComponent } from './components/dash/dash.component';
import { AuthGuard } from './guards/auth.guard';
import { UsersComponent } from './components/users.component';
import { DragComponent } from './components/drag.component';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerComponent } from './components/customers/customer.component';

const appRoutes: Routes = [

    { path: 'schedules', component: CustomersComponent },
    { path: 'login', component: CustomersComponent },
    { path: 'dash', component: CustomersComponent },
    { path: 'users', component: CustomersComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'customers/:id', component: CustomerComponent },

    // {   path: '',
    //     redirectTo: '/users',
    //     pathMatch: 'full'
    // },
    // { path: 'dash', component: DashComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routes = RouterModule.forRoot(appRoutes, { useHash: true });
