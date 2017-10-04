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
  MdIconModule,
  MdToolbarModule,
  MdButtonModule,
  MdCheckboxModule,
  MdMenuModule,
  MdSidenavModule,
  MdListModule,
  MdCardModule } from '@angular/material';

import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { NotificationsComponent } from './ui/notifications/notifications.component';
import { TopBarMenuComponent } from './ui/top-bar-menu/top-bar-menu.component';
import { SearchComponent } from './ui/search/search.component';
import { UsersComponent } from './_components/users.component';

import { RouterModule } from '@angular/router';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    LoginComponent,
    NotificationsComponent,
    TopBarMenuComponent,
    SearchComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdIconModule,
    SlimLoadingBarModule,
    MdMenuModule,
    MdSidenavModule,
    MdListModule,
    MdCardModule,
    FormsModule,
    HttpModule,
    routes,
    FlexLayoutModule,
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
