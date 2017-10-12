import { Component, Input, Output, EventEmitter, AfterViewInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-calendar-block',
  template: `
    <div mwlResizable
      [ngStyle]="style"
      [appDraggable]="true"
      [stepSize]="15"
      [enableGhostResize]="true"
      [resizeCursorPrecision]="10"
      [resizeEdges]="{bottom: true}"
      [resizeSnapGrid]="{bottom: 15}"
      (resizeStart)="onResizeStart($event)"
      (resizeEnd)="onResizeEnd($event)"
      (resizing)="onResizing($event)"
      (clickable)="onClick()"
      (up)="onUp($event)"
      (move)="onMove($event)"
      boundry="{{boundry}}"
      time="{{time}}"
      class="app-calendar-block">
      <div class="app-calendar-block__inner">
        <span class="noselect">{{text}}</span>
      </div>
    </div>`,
  styleUrls: ['./calendar-block.component.scss']
})

export class CalendarBlockComponent implements AfterViewInit {

  public style: Object = {};

  @Input() text: string;
  @Input() type: string;
  @Input() boundry: number;
  @Input() time: number;

  resizing = false;

  constructor(public dialog: MatDialog) {}

  ngAfterViewInit(): void {
    console.log('block boundry: ' + this.boundry);
  }

  onResizeEnd(event: ResizeEvent): void {
    console.log(event);
    this.resizing = false;
    this.style = {
      height: `${event.rectangle.height}px`
    };
  }

  onResizeStart(event: ResizeEvent): void {
    this.resizing = true;
  }

  onResizing(event: ResizeEvent): void {
  }

  onClick () {
    console.log('block clicked yoyoyo, raise event');
    // this.openDialog();
  }

  onUp (event) {
    if (!this.resizing) {
      console.log('position y: ' + event.y);
      event.element.nativeElement.style.top = event.y + 'px';
    }
  }

  onMove (event) {
    if (!this.resizing) {
      event.element.nativeElement.style.top = event.top;
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BlockDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


@Component({
  selector: 'app-block-dialog',
  template: `Hello`
})
export class BlockDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<BlockDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
