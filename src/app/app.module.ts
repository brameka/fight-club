import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MdIconModule, MdToolbarModule, MdButtonModule, MdCheckboxModule, MdMenuModule, MdSidenavModule } from '@angular/material';

import { DashComponent } from './dash/dash.component';
import { SearchComponent } from './ui/search/search.component';
import { NotificationsComponent } from './ui/notifications/notifications.component';
import { TopBarMenuComponent } from './ui/top-bar-menu/top-bar-menu.component';


import { RouterModule } from '@angular/router';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

// import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    SearchComponent,
    NotificationsComponent,
    TopBarMenuComponent
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
    RouterModule.forRoot([
      {
        path: 'dash',
        component: DashComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent, SearchComponent, NotificationsComponent, TopBarMenuComponent]
})
export class AppModule { }
