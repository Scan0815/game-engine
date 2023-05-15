import { ITileMapLayer } from './TileMapLayer';
import { GameObject } from '../gameObjects/gameObject';

export interface IScene {
  name: string,
  id: string,
  gameObjects: GameObject[],
  layers: ITileMapLayer,
  onEmit: Function
}

