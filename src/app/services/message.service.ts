import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class MessageService {
  messages: string[] = [];
  constructor(private http: HttpClient ) {}

  add(message: string) {
    console.log(`add message: ${message}`);
    this.messages.push(message);
    this.http.post('http://localhost:3000/logs',  {message: message, date: Date.now()})
      .subscribe(x => console.log(x));
  }

  clear() {
    this.messages = [];
    this.http.delete('http://localhost:3000/logs', httpOptions);
  }
}
