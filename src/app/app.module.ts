import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { fakeBackendProvider } from './helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AuthGuard } from './guards/auth.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResizableModule } from 'angular-resizable-element';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// export const firebaseConfig = environment.firebase;

import { environment } from '../environments/environment';
import { UiComponentsModule } from './ui/ui-components.module';
import { MaterialComponentsModule } from './ui/material.module';
import { StateModule } from './state/state.module';
import { ServicesModule } from './services/services.module';
import { ComponentsModule } from './components/components.module';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
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
    UiComponentsModule,
    MaterialComponentsModule,
    StateModule,
    ServicesModule,
    ComponentsModule,
    NgxDatatableModule,
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
