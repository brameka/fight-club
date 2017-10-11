import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { AuthGuard } from './_guards/auth.guard';
import { UsersComponent } from './_components/users.component';
import { DragComponent } from './_components/drag.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'dash', component: DashComponent },
    { path: 'users', component: UsersComponent },
    { path: 'drag', component: DragComponent },
    // { path: 'dash', component: DashComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routes = RouterModule.forRoot(appRoutes);
