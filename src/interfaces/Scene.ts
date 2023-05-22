import { ITileMapLayer } from './TileMapLayer';
import { GameObject } from '../gameObjects/gameObject';
import { Inventory } from '../classes/Inventory';

export interface IScene {
  name: string,
  id: string,
  gameObjects: GameObject[],
  layers: ITileMapLayer,
  isCompleted:boolean,
  onEmit: Function
  inventory: Inventory;

  isAtPositionAWall(x, y);
  addGameObject(config);
  deleteGameObject(gameObjectToDelete);
  completeScene();
}


