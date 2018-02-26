import {AcEntity, ActionType} from 'angular-cesium';

export class Station {
  focus: boolean;
  id: string;
  name: string;
  coffee: number;
  cookies: number;
  actionType: ActionType;
  entity: AcEntity;
}
