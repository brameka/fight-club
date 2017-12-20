import { Component } from '@angular/core';

@Component({
  selector: 'app-content-loader',
  styleUrls: ['./content-loader.component.scss'],
  template: `
    <div class="app-content-loader__card">
      <div class="app-content-loader__animated">
        <div class="app-content-loader__mask app-content-loader__header-top"></div>
        <div class="app-content-loader__mask app-content-loader__header-left"></div>
        <div class="app-content-loader__mask app-content-loader__header-right"></div>
        <div class="app-content-loader__mask app-content-loader__header-bottom"></div>
        <div class="app-content-loader__mask app-content-loader__subheader-left"></div>
        <div class="app-content-loader__mask app-content-loader__subheader-right"></div>
        <div class="app-content-loader__mask app-content-loader__subheader-bottom"></div>
        <div class="app-content-loader__mask app-content-loader__content-top"></div>
        <div class="app-content-loader__mask app-content-loader__content-first-end"></div>
        <div class="app-content-loader__mask app-content-loader__content-second-line"></div>
        <div class="app-content-loader__mask app-content-loader__content-second-end"></div>
        <div class="app-content-loader__mask app-content-loader__content-third-line"></div>
        <div class="app-content-loader__mask app-content-loader__content-third-end"></div>
      </div>
    </div>
  `
})
export class ContentLoaderComponent {
}
