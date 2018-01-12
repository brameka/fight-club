import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiDatePickerComponent } from './components/date-picker/ui-date-picker.component';
import { UiDateTimePickerComponent } from './components/date-time-picker/ui-date-time-picker.component';
import { MaterialComponentsModule } from './material.module';
import { SnackComponent } from './notifications/snack.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TopBarMenuComponent } from './top-bar-menu/top-bar-menu.component';
import { SearchComponent } from './search/search.component';
import { ContentLoaderComponent } from './loader/content-loader.component';
import { AutoresizeDirective } from 'app/directives/autoresize.directive';

const components = [
  UiDatePickerComponent,
  UiDateTimePickerComponent,
  SnackComponent,
  NotificationsComponent,
  TopBarMenuComponent,
  SearchComponent,
  ContentLoaderComponent,
  AutoresizeDirective
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialComponentsModule
  ],
  declarations: [ ...components ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialComponentsModule,
    ...components,
  ],
  entryComponents: [
    SnackComponent
  ]
})
export class UiComponentsModule {}
