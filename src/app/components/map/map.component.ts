import {Component, OnInit, OnDestroy, Input, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AcNotification} from 'angular-cesium';
import {STATIONS} from '../../data/mock-stations';

import {StationService} from '../../services/station.service';
import {StationDetailComponent} from '../station-detail/station-detail.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy, AfterViewInit{

  loading: Boolean;
  points$: Observable<AcNotification>;
  stationDetail: StationDetailComponent;
  constructor(private stationService: StationService,
              private route: ActivatedRoute,
              private cdr: ChangeDetectorRef
               ) {
    this.points$ = Observable.from(STATIONS);

  }

  ngOnInit() {
    this.colorPoint();
    this.loading = false;
  }

  colorPoint() {
    const id = this.route.snapshot.paramMap.get('id');
    const focus = STATIONS.find(station => station.focus === true);
    if ( focus ) {
      focus.focus = false;
      // focus.entity.color = Cesium.Color.BLUE;
    }
    const x = STATIONS
      .find(station => station.id === id);
    x.focus = true;
    // x.entity.color = Cesium.Color.RED;
  }
  ngAfterViewInit() {

    setTimeout(() => this.loading = true, 3000);
    this.cdr.detectChanges();
  }

  ngOnDestroy( ) {
  }
}
