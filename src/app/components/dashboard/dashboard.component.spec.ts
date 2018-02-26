import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DashboardComponent} from './dashboard.component';
import {Station} from '../../station';
import {StationService} from '../../services/station.service';
import {MessageService} from '../../services/message.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {AcEntity, ActionType} from 'angular-cesium';


describe('dashboardComponent', () => {
  // let httpMock: HttpTestingController;
  let stationService: StationService;
  let component: DashboardComponent;

  beforeEach(  () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StationService, MessageService, DashboardComponent]
    });
    stationService = TestBed.get(StationService);
    // httpMock = TestBed.get(HttpTestingController);
    component = TestBed.get(DashboardComponent);
    component.stations = dataMock ;
  }
)

  const dataMock = [
    { focus: false, id: '12', name: 'st-12', coffee: 10, cookies: 10,
    actionType: ActionType.ADD_UPDATE, entity:
  new AcEntity({
    id: '12',
    name: 'Paris',
    color: Cesium.Color.BLUE,
    position: Cesium.Cartesian3.fromDegrees(2.3522219, 48.856614),
  })},
    {focus: false, id: '12', name: 'st-12', coffee: 10, cookies: 10,
    actionType: ActionType.ADD_UPDATE, entity:
  new AcEntity({
    id: '12',
    name: 'Paris',
    color: Cesium.Color.BLUE,
    position: Cesium.Cartesian3.fromDegrees(2.3522219, 48.856614),
  })},
    {focus: false, id: '12', name: 'st-12', coffee: 10, cookies: 10,
    actionType: ActionType.ADD_UPDATE, entity:
  new AcEntity({
    id: '12',
    name: 'Paris',
    color: Cesium.Color.BLUE,
    position: Cesium.Cartesian3.fromDegrees(2.3522219, 48.856614),
  })}
  ];

  it('should get all stations', (done) => {
    expect(component.stations.length).toBe(3);
    done();
  });

});
