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

const modules = [
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
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class MaterialComponentsModule {}
