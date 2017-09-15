import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-bar-menu',
  template: `
    <div class="app-top-bar-menu" *ngIf="open">
      <div class="app-top-bar-menu__overlay" (click)="clickOverlay($event)"></div>
      <div class="app-top-bar-menu__frame">
        <div class="app-top-bar-menu__caret"></div>
        <div class="app-top-bar-menu__body"><ng-content></ng-content></div>
      </div>
    </div>
    `
})
export class TopBarMenuComponent {
  @Input() open: boolean;
  @Output() clickAway: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  clickOverlay (event: MouseEvent) {
    this.clickAway.emit(event);
  }
}
