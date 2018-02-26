import {Component, OnDestroy, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Station } from '../../station';
import { StationService} from '../../services/station.service';


@Component({
  selector: 'app-station-search',
  templateUrl: './station-search.component.html',
  styleUrls: ['./station-search.component.css']
})
export class StationSearchComponent implements OnInit, OnDestroy{
  station$: Observable<Station[]>;
  private searchTerms = new Subject<string>();

  constructor(private stationService: StationService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.station$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
    debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.stationService.searchStation(term)),
    );
  }
  ngOnDestroy( ) {

  }

}
