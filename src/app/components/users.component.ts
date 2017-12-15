import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements AfterViewInit  {

  calendarOptions: Object = {
      height: 'parent',
      fixedWeekCount : false,
      defaultDate: '2016-09-12',
      editable: true,
      eventLimit: false,
      defaultView: 'agendaWeek',
      selectable: true,
      events: [
        {
          title: 'All Day Event',
          start: '2016-09-01'
        },
        {
          title: 'Long Event',
          start: '2016-09-07',
          end: '2016-09-10'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2016-09-09T16:00:00'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2016-09-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2016-09-11',
          end: '2016-09-13'
        },
        {
          title: 'Meeting',
          start: '2016-09-12T10:30:00',
          end: '2016-09-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2016-09-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2016-09-12T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2016-09-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2016-09-12T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2016-09-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2016-09-28'
        }
      ]
    };

    onCalendarInit(initialized: boolean) {
      console.log('Calendar initialized');
    }


  ngAfterViewInit(): void {
  }

  /*drawRectsObservable() {
  const svg = document.getElementById("drawRects");
    const mousedrag = Observable.fromEvent<MouseEvent>(svg, 'mousedown')
      .map(e => ({event: e, svgBounds: svg.getBoundingClientRect()}))
      .map(({event, svgBounds}) => ({
        rect: new Elem(svg, 'rect')
          .attr('x', event.clientX - svgBounds.left)
          .attr('y', event.clientY - svgBounds.top)
          .attr('width', 5)
          .attr('height', 5)
          .attr('fill', '#95B3D7'),
        svgBounds: svgBounds}))
      .subscribe(({rect, svgBounds}) => {
        const ox = Number(rect.attr('x')), oy = Number(rect.attr('y'));
        Observable.fromEvent<MouseEvent>(svg, 'mousemove')
          .takeUntil(Observable.fromEvent(svg, 'mouseup'))
          .map(({clientX, clientY})=>({
            rect, ox, oy,
            x: clientX - svgBounds.left,
            y: clientY - svgBounds.top}))
          .subscribe(({rect, ox, oy, x, y})=>
            rect.attr('x', Math.min(x,ox))
                .attr('y', Math.min(y,oy))
                .attr('width', Math.abs(ox - x))
                .attr('height', Math.abs(oy - y))
          );
      });
  }*/

}
