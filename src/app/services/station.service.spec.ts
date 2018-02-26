import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {StationService} from './station.service';

import {MessageService} from './message.service';
import {AcEntity, ActionType} from 'angular-cesium';
import {Station} from '../station';
import {after} from 'selenium-webdriver/testing';

describe('StationService', () => {
  let service: StationService;
  let httpMock: HttpTestingController;

  const testService: Station = {
    focus: false, id: '12', name: 'st-12', coffee: 10, cookies: 10,
    actionType: ActionType.ADD_UPDATE, entity:
      new AcEntity({
        id: '12',
        name: 'Paris',
        color: Cesium.Color.BLUE,
        position: Cesium.Cartesian3.fromDegrees(2.3522219, 48.856614),
      })
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StationService, MessageService]
    });
    service = TestBed.get(StationService);
    httpMock = TestBed.get(HttpTestingController);
  });
  // after(() => {
  //   httpMock.verify();
  // });
  it('should retrive post from api', () => {
    service.getStation(12).subscribe(post => {
      expect(post.name).toEqual(testService.name);
    });
    // const req = httpMock.expectOne('http://localhost:4200/api/stations');
    // expect(req.request.method).toBe('GET');
  });


});
