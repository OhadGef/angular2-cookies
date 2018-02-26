import {Component, OnDestroy, OnInit} from '@angular/core';
import {Station} from '../../station';
import {STATIONS} from '../../data/mock-stations';
import {StationService} from '../../services/station.service';


@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit, OnDestroy {

  stations: Station[];

  constructor(private stationService: StationService) {
  }

  ngOnInit() {
    this.getStations();
  }


  getStations(): void {
    this.stationService.getStations()
      .subscribe(stations => this.stations = stations);
  }

  add(name: string): void {
    name = name.trim();
    console.log(name);
    // if (!name) {
    //   return;
    // }
    // this.stationService.addStation({name} as Station)
    //   .subscribe(station => {
    //     this.stations.push(station);
    //   });
  }

  delete(station: Station): void {
    this.stations = this.stations.filter(h => h !== station);
    this.stationService.deleteStation(station).subscribe();
  }

  ngOnDestroy() {
    this.stations = null;
  }

}
