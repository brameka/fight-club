import {Component} from '@angular/core';

@Component({
    selector: 'app-drag',
    template: `
<h4>Simple Drag-and-Drop</h4>
<div class="row">
    drag
</div>`
})
export class DragComponent {
    simpleDrop: any = null;
}
