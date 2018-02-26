import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import {Station} from '../station';
import {STATIONS} from '../data/mock-stations';
import {MessageService} from './message.service';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

const httpOptions = {  headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable()

export class StationService {

  private stationUrl = 'http://localhost:3000';  // URL to web api
  //  private stationUrl = 'api/stations';  // URL to web api

  constructor(private messageService: MessageService,
              private http: HttpClient) {}

  /** POST: add a new station to the server */
  addStation(station: Station): Observable<Station> {
    return this.http.post<Station>(this.stationUrl, station, httpOptions).pipe(
      tap((station: Station) => this.log(`added station w/ id=${station.id}`)),
      catchError(this.handleError<Station>('addStation'))
    );
  }


  /** PUT: update the station on the server */
  updateStation(station: Station): Observable<any> {
    console.log('update the station on the server: ', station);
    return this.http.put(`${this.stationUrl}/st/:${station}`, httpOptions).pipe(
      tap(_ => this.log(`updated station id=${station.id}`)),
      catchError(this.handleError<any>('updateStation'))
    );
  }

  /** DELETE: delete the station from the server */
  deleteStation(station: Station | number): Observable<Station> {
    const id = typeof station === 'number' ? station : station.id;
    const url = `${this.stationUrl}/${id}`;

    return this.http.delete<Station>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted station id=${id}`)),
      catchError(this.handleError<Station>('deleteStation'))
    );
  }

  /** GET stations whose name contains search term */
  searchStation(term: string): Observable<Station[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Station[]>(`api/stations/?name=${term}`).pipe(
      tap(_ => this.log(`found stations matching "${term}"`)),
      catchError(this.handleError<Station[]>('searchStations', []))
    );
  }

  /** GET stations from the server */
  getStations(): Observable<Station[]> {
    this.messageService.add('messageService: fetched stations');
    return this.http.get<Station[]>(this.stationUrl)
      .pipe(
        tap(station => this.log(`fetched stations`)),
        catchError(this.handleError('getStation', []))
      );
    //   return of(STATIONS);
  }


  getStation(id: number): Observable<Station> {
    const url = `${this.stationUrl}/st/${id}`;
    return this.http.get<Station>(url).pipe(
      tap(_ => this.log(`fetch station id=${id}`)),
      catchError(this.handleError<Station>(`getStation id=${id}`))
    );
    // this.messageService.add(`stationService: fetched station id=${id}`);
    // return of(STATIONS.find(station => station.id === id));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('StationService: ' + message);
  }
}
