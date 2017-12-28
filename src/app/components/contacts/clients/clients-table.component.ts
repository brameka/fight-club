import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../../models/contact';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.scss']
})
export class ClientsTableComponent {
  @Input() contacts: Contact[];
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() {}

}
