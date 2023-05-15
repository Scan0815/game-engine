import { IGame } from '../interfaces/Game';
import { IScene } from '../interfaces/Scene';
import { LoadGame } from '../helpers/file';
import { SpriteSheetImageAtom } from '../atom/spriteSheetImage';
import { ITileMapItem } from '../interfaces/TileMapLayer';
import { Scene } from './Scene';

export class Game implements IGame {
  scenes: IScene[];
  tileSet: string;
  spriteSheetImage:CanvasImageSource;
  onEmit: Function;
  gameObjects: ITileMapItem[];
  sceneIndex: number;
  activeScene: IScene;

  constructor(sceneIndex, onEmit = (_activeScene:IScene) => {}) {
    this.sceneIndex = sceneIndex;
    this.onEmit = onEmit;
  }

  async start(){
    const game = await LoadGame('/assets/game/test-key2.json')
    this.spriteSheetImage = await new Promise(resolve => {
      const image = new Image();
      image.src = game.tileSet;
      image.onload = () => {
        resolve(image);
      };
    });
    SpriteSheetImageAtom.set(this.spriteSheetImage);
    this.scenes = game.scenes;
    this.tileSet = game.tileSet;
    this.activeScene = new Scene(this.scenes[this.sceneIndex], this.onEmit);
  }

  destroy(){
  }

}
