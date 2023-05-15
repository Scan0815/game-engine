import { IScene } from '../interfaces/Scene';
import { GameObject } from '../gameObjects/gameObject';
import { ITileMapLayer } from '../interfaces/TileMapLayer';

export class Scene implements IScene {
  name: string;
  id: string;
  gameObjects: GameObject[];
  layers: ITileMapLayer;

  onEmit: Function;

  constructor(scene:IScene, onEmit) {
    this.name = scene.name;
    this.id = scene.id;
    this.gameObjects = scene.gameObjects;
    this.layers = scene.layers;
    this.onEmit = onEmit;

    console.log(this.layers.layers.walls);


  }




}
