import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiDatePickerComponent } from './components/date-picker/ui-date-picker.component';
import { MaterialComponentsModule } from './material.module';
import { SnackComponent } from './notifications/snack.component';

const components = [
  UiDatePickerComponent,
  SnackComponent
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
export class ComponentsModule {}
