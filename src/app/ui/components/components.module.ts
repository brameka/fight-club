import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiDatePickerComponent } from './date-picker/ui-date-picker.component';
import { MaterialComponentsModule } from '../material.module';

const components = [
  UiDatePickerComponent
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
  ]
})
export class ComponentsModule {}
