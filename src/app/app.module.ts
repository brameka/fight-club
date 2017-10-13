import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';

import { fakeBackendProvider } from './_helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import { routes } from './app.routes';

import {
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule,
  MatDialogModule,
  MatButtonToggleModule,
  MatCardModule } from '@angular/material';

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

import { BlockDialogComponent } from './_components/calendar/calendar-block.component';

import { DragComponent } from './_components/drag.component';

import { RouterModule } from '@angular/router';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from 'ap-angular2-fullcalendar';
import { DndModule } from 'ng2-dnd';
import { ResizableModule } from 'angular-resizable-element';

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
    CalendarDraggableDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatButtonToggleModule,
    SlimLoadingBarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    HttpModule,
    routes,
    FlexLayoutModule,
    CalendarModule,
    ResizableModule,
    DndModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
