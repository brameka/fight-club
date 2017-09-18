import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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
import { NotificationsComponent } from './ui/notifications/notifications.component';
import { TopBarMenuComponent } from './ui/top-bar-menu/top-bar-menu.component';
import { SearchComponent } from './ui/search/search.component';


import { RouterModule } from '@angular/router';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

// import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    NotificationsComponent,
    TopBarMenuComponent,
    SearchComponent
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
    RouterModule.forRoot([
      {
        path: 'dash',
        component: DashComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
