import { NgModule } from '@angular/core';

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
  MatTabsModule,
  MatFormFieldModule,
  MatTableModule,
  MatOptionModule,
  MatSelectModule,
  MatInputModule,
  MatStepperModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatCardModule } from '@angular/material';

const components = [
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule,
  MatDialogModule,
  MatButtonToggleModule,
  MatTabsModule,
  MatFormFieldModule,
  MatTableModule,
  MatOptionModule,
  MatSelectModule,
  MatInputModule,
  MatStepperModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
  MatSnackBarModule
];

@NgModule({
  imports: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class MaterialComponentsModule {}
