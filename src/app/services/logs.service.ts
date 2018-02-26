import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LogsService {
  private stationUrl = 'http://localhost:3000';  // URL to web api

  constructor(private http: HttpClient) { }

  getLogs(): Observable<any> {
    return this.http.get(`${this.stationUrl}/logs`);
  }
  getsumerizeLogs(): Observable<any> {
    return this.http.get(`${this.stationUrl}/sum`);
  }
}
