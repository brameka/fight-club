import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { AuthGuard } from './_guards/auth.guard';
import { UsersComponent } from './_components/users.component';
import { DragComponent } from './_components/drag.component';
import { SchedulesComponent } from './_components/schedules/schedules.component';
import { CustomersComponent } from './_components/customers/customers.component';

const appRoutes: Routes = [

    { path: 'schedules', component: SchedulesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dash', component: DashComponent },
    { path: 'users', component: UsersComponent },
    { path: 'customers', component: CustomersComponent },

    // {   path: '',
    //     redirectTo: '/users',
    //     pathMatch: 'full'
    // },
    // { path: 'dash', component: DashComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routes = RouterModule.forRoot(appRoutes);
