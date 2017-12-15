import { Component, Directive, OnInit, EventEmitter, HostListener, ElementRef, Input, Output, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class CalendarDraggableDirective implements OnInit, AfterViewInit {
    topStart = 0;
    leftStart = 0;
    _allowDrag = true;
    md: boolean;
    deltaStart;
    delta;

    initialY = 0;

    x = 0;
    y = 0;
    top = 0;
    left = 0;
    width = 0;
    height = 0;

    @Input() stepSize: number;
    @Input() boundry: number;
    @Input() time: number;

    @Output() clickable = new EventEmitter();
    @Output() up = new EventEmitter<any>();
    @Output() move = new EventEmitter<any>();

    constructor(public element: ElementRef) {}

        ngOnInit() {
          if (this._allowDrag) {
            this.element.nativeElement.className += ' cursor-draggable';
          }
          this.initialY = this.time * 4 * 15;
          this.element.nativeElement.style.top = this.initialY + 'px';
        }

        ngAfterViewInit() {
          this.element.nativeElement.style.top = this.initialY + 'px';
          this.setCoordinates();
        }

        setCoordinates() {
          this.top = this.element.nativeElement.clientTop;
          this.left = this.element.nativeElement.clientTop;
          this.width = this.element.nativeElement.clientWidth;
          this.height = this.element.nativeElement.clientHeight;
        }

        @HostListener('mousedown', ['$event'])
        onMouseDown(event: MouseEvent) {
          if (event.button === 2) {
            return;
          }
          this.md = true;
          this.topStart = event.clientY - this.element.nativeElement.style.top.replace('px', '');
          this.leftStart = event.clientX - this.element.nativeElement.style.left.replace('px', '');
          this.deltaStart = event.clientY;
          this.setCoordinates();
          this.x = event.x;
          this.y = event.y;
        }

        @HostListener('document:mouseup', ['$event'])
        onMouseUp(event: MouseEvent) {
          if (this.md && this._allowDrag) {
            let y = event.clientY - this.topStart;
            const remainder = y % this.stepSize;
            y = y - remainder;
            if (remainder > (this.stepSize / 2)) {
              y = y + this.stepSize;
            }
            if (y < this.boundry) {
              y = this.boundry;
            }

            const data = {
              event: event,
              element: this.element,
              y: y
            };
            this.up.emit(data);

            this.delta = this.deltaStart - event.clientY;
            if (Math.abs(this.delta) < 2) {
              this.clickable.emit();
            }
          }
          this.md = false;
        }

        @HostListener('document:mousemove', ['$event'])
        onMouseMove(event: MouseEvent) {
          if (this.md && this._allowDrag) {
            if ((event.clientY - this.topStart) > this.boundry) {
              const data = {
                top: (event.clientY - this.topStart) + 'px',
                left: (event.clientX - this.leftStart) + 'px',
                x: event.clientX,
                element: this.element,
                coordinates: {
                  x: this.x,
                  y: this.y,
                  deltax: event.clientX - this.x,
                  deltay: event.clientY - this.y,
                  top: this.top,
                  left: this.left,
                  width: this.width,
                  height: this.height
                }
              };
              this.move.emit(data);
            }
          }
        }

        @HostListener('touchstart', ['$event'])
        onTouchStart(event: TouchEvent) {
          this.md = true;
          this.topStart = event.changedTouches[0].clientY - this.element.nativeElement.style.top.replace('px', '');
          event.stopPropagation();
        }

        @HostListener('document:touchend')
        onTouchEnd() {
          this.md = false;
        }

        @HostListener('document:touchmove', ['$event'])
        onTouchMove(event: TouchEvent) {
          if (this.md && this._allowDrag) {
            this.element.nativeElement.style.top = ( event.changedTouches[0].clientY - this.topStart ) + 'px';
          }
          event.stopPropagation();
        }

        @Input('appDraggable')
        set allowDrag(value: boolean) {
          this._allowDrag = value;
          if (this._allowDrag) {
            this.element.nativeElement.className += ' cursor-draggable';
          } else {
            this.element.nativeElement.className = this.element.nativeElement.className.replace(' cursor-draggable', '');
          }
        }
}
