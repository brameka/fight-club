import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';

import { Contact } from '../models/contact';
import { Role } from '../models/role';

@Injectable()
export class ContactService {
  contact: Contact = {
    name: 'Jon Jon Florence',
    firstname: 'Jon Jon',
    lastname: 'Florence',
    mobile: '000000000',
    homePhone: '000000000',
    workPhone: '000000000',
    email: 'jonjon.florence@gmail.com',
    role: Role.Child
  };
  contacts$: Observable<Contact>;
  contact$: Observable<Contact>;

  constructor() {}

  getContacts(): Observable<Contact> {
    const contacts = [];
    for(let i = 0; i < 20; i++) {
      contacts.push(this.contact);  
    }
    this.contacts$ = Observable.from(contacts);
    return this.contacts$;
  }

  getContact(id: string): Observable<Contact> {
    this.contact$ = Observable.of(this.contact);
    return this.contact$;
  }
}
