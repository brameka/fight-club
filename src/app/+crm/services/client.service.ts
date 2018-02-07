import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Client } from 'app/models/client';

@Injectable()
export class ClientService {
  private client: Client = {
    id: '12345',
    name: 'Kelly Slater',
    contacts: [
      {
        name: 'Jon Jon Florence',
        firstname: 'Jon Jon',
        lastname: 'Florence',
        mobile: '000000000',
        email: 'jonjon.florence@gmail.com'
      }
    ],
    taxNumber: 'TFN1234',
    bank: 'BW1234'
  };
  private clients$: Observable<Client[]>;
  private client$: Observable<Client>;

  constructor() {}

  getClients(payload: any): Observable<Client[]> {
    const clients = [];
    for (let i = 0; i < 3; i++) {
      clients.push(this.client);
    }
    this.clients$ = Observable.of(clients);
    return this.clients$;
  }

  getClient(id: string): Observable<Client> {
    this.client$ = Observable.of(this.client);
    return this.client$;
  }

  createClient(client: Client): Observable<any> {
    this.client$ = Observable.of(this.client);
    return this.client$;
  }
}
