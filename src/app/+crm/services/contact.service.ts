import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Contact } from 'app/models/contact';
import { Role } from 'app/models/role';

@Injectable()
export class ContactService {
  private contact: Contact = {
    name: 'Jon Jon Florence',
    firstname: 'Jon Jon',
    lastname: 'Florence',
    mobile: '000000000',
    homePhone: '000000000',
    workPhone: '000000000',
    email: 'jonjon.florence@gmail.com',
    role: Role.Child
  };
  private contacts$: Observable<Contact[]>;
  private contact$: Observable<Contact>;

  constructor() {}

  getContacts(payload: any): Observable<Contact[]> {
    console.log('get contacts service:');
    const contacts = [];
    for (let i = 0; i < 3; i++) {
      contacts.push(this.contact);
    }
    this.contacts$ = Observable.of(contacts);
    return this.contacts$;
  }

  getContact(id: string): Observable<Contact> {
    this.contact$ = Observable.of(this.contact);
    return this.contact$;
  }
}
