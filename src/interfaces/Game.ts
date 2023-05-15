import { IScene } from './Scene';
import { ITileMapItem } from './TileMapLayer';

export interface IGame {
  scenes: IScene[],
  tileSet: string,
  gameObjects: ITileMapItem[],
}
