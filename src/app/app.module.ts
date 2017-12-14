import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { routes } from './app.routes';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { NotificationsComponent } from './ui/notifications/notifications.component';
import { TopBarMenuComponent } from './ui/top-bar-menu/top-bar-menu.component';
import { SearchComponent } from './ui/search/search.component';
import { UsersComponent } from './_components/users.component';
import { DayCalendarComponent } from './_components/calendar/day-calendar.component';
import { CalendarBlockComponent } from './_components/calendar/calendar-block.component';
import { CalendarDraggableDirective } from './_components/calendar/calendar-draggable';
import { CalendarCellComponent } from './_components/calendar/calendar-cell.component';
import { CalendarBarComponent } from './_components/calendar/calendar-bar.component';
import { CalendarActionsComponent } from './_components/calendar/calendar-actions.component';
import { SchedulesComponent } from './_components/schedules/schedules.component';
import { CustomersComponent } from './_components/customers/customers.component';
import { CustomerComponent } from './_components/customers/customer.component';
import { CustomerFormComponent } from './_components/customers/customer-form.component';
import { NotesComponent } from './_components/customers/notes.component';

import { BlockDialogComponent } from './_components/calendar/calendar-block.component';
import { DragComponent } from './_components/drag.component';
import { RouterModule } from '@angular/router';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DndModule } from 'ng2-dnd';
import { ResizableModule } from 'angular-resizable-element';
import { AutoresizeDirective } from './_directives/autoresize.directive';

import { ComponentsModule } from './ui/components.module';
import { MaterialComponentsModule } from './ui/material.module';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebase;

import { StateModule } from './state/state.module';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    LoginComponent,
    NotificationsComponent,
    TopBarMenuComponent,
    SearchComponent,
    UsersComponent,
    DayCalendarComponent,
    CalendarBlockComponent,
    CalendarCellComponent,
    CalendarBarComponent,
    CalendarActionsComponent,
    BlockDialogComponent,
    DragComponent,
    SchedulesComponent,
    CustomersComponent,
    CustomerComponent,
    CustomerFormComponent,
    NotesComponent,
    CalendarDraggableDirective,
    AutoresizeDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SlimLoadingBarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routes,
    FlexLayoutModule,
    ResizableModule,
    ComponentsModule,
    MaterialComponentsModule,
    StateModule,
    ServicesModule,
    DndModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [
    AuthGuard,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
