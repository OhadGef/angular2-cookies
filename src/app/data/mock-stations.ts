import {Station} from '../station';
import {AcEntity, ActionType} from 'angular-cesium';

export const STATIONS: Station[] = [
  { focus: false, id: '10', name: 'st-10', coffee: 10, cookies: 10, actionType: ActionType.ADD_UPDATE, entity:
      new AcEntity({
        id: '10',
        name: 'Tel Aviv',
        color: Cesium.Color.BLUE,
        position: Cesium.Cartesian3.fromDegrees(34.7817676, 32.0852999)
      })
  },
  {  focus: false, id: '11', name: 'st-11', coffee: 10, cookies: 10, actionType: ActionType.ADD_UPDATE, entity:
      new AcEntity({
        id: '11',
        name: 'New York',
        color: Cesium.Color.BLUE,
        position: Cesium.Cartesian3.fromDegrees( -74.0059728 , 40.7127753 ),
      }),
   },
  { focus: false, id: '12', name: 'st-12', coffee: 10, cookies: 10, actionType: ActionType.ADD_UPDATE, entity:
      new AcEntity({
        id: '12',
        name: 'Paris',
        color: Cesium.Color.BLUE,
        position: Cesium.Cartesian3.fromDegrees( 2.3522219 , 48.856614 ),
      })},
  {  focus: false, id: '13', name: 'st-13', coffee: 10, cookies: 10, actionType: ActionType.ADD_UPDATE, entity:
      new AcEntity({
        id: '13',
        name: 'Rom',
        color: Cesium.Color.BLUE,
        position: Cesium.Cartesian3.fromDegrees( 12.4963655 , 41.9027835 ),
      })},
  { focus: false, id: '14', name: 'st-14', coffee: 10, cookies: 10 , actionType: ActionType.ADD_UPDATE, entity:
      new AcEntity({
        id: '14',
        name: 'Budapest',
        color: Cesium.Color.BLUE,
        position: Cesium.Cartesian3.fromDegrees( 19.040235 , 47.497912 ),
      })}
];
