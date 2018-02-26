import { Component, OnInit, OnDestroy } from '@angular/core';
import {Station} from '../../station';
import {StationService} from '../../services/station.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  stations: Station[] = [];
  constructor(private stationService: StationService) { }

  ngOnInit() {
    this.getStations();
  }

  getStations(): void {
    this.stationService.getStations()
      .subscribe(stations => this.stations = stations.slice(1, 5));
  }

  ngOnDestroy(): void {
    this.stations = null;
  }
}
