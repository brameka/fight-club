import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MdIconModule, MdToolbarModule, MdButtonModule, MdCheckboxModule } from '@angular/material';
import { DashComponent } from './dash/dash.component';

import { RouterModule }   from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    DashComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule,
    MdToolbarModule,
    MdIconModule,
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
