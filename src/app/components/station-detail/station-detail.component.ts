import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import { Station } from '../../station';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

import { StationService} from '../../services/station.service';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-station-detail',
  templateUrl: './station-detail.component.html',
  styleUrls: ['./station-detail.component.css']
})
export class StationDetailComponent implements OnInit, OnDestroy {

  @Input() station: Station;


  constructor(
    private route: ActivatedRoute,
    private stationService: StationService,
    private location: Location
  ) { }

  ngOnInit(): void {

    this.getStation();
  }

  getStation(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.stationService.getStation(id)
    .subscribe(station => this.station = station);
  }
  goBack(): void {
    // TODO: use other logic (static nav)
    this.location.back();
  }
  save(): void {
    this.stationService.updateStation(this.station)
      .subscribe(() => this.goBack());
  }
  ngOnDestroy( ) {

  }
}
