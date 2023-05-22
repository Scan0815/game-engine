import { GameObject } from '../gameObjects/gameObject';
import { ITileMapLayer } from '../interfaces/TileMapLayer';
import { gameObjectFactory } from './GameObjectFactory';
import { IScene } from '../interfaces/Scene';
import { Inventory } from './Inventory';

export class Scene implements IScene {
  name: string;
  id: string;
  isCompleted = false;
  gameObjects: GameObject[];
  layers: ITileMapLayer;
  inventory: Inventory;
  onEmit: Function;

  constructor(scene:IScene, onEmit) {
    this.name = scene.name;
    this.id = scene.id;
    this.gameObjects = scene.gameObjects;
    this.layers = scene.layers;
    this.isCompleted = scene.isCompleted || false;
    this.inventory = new Inventory();
    this.onEmit = onEmit;
  }

  public addGameObject(config) {
    this.gameObjects.push(gameObjectFactory.createGameObject(config, this));
  }

  deleteGameObject(gameObjectToRemove) {
    const findIndex = this.gameObjects.findIndex(gO => gO.id === gameObjectToRemove.id)
    if(findIndex >= 0) {
      delete this.gameObjects[findIndex];
      this.gameObjects.splice(findIndex, 1);
    }
  }

  completeScene() {
    this.isCompleted = true;
    console.log("completed",this.isCompleted)
  }

  public isAtPositionAWall(x, y){
    const result = this.layers.layers.walls.filter(wall => {
      return (wall.x === x && wall.y === y);
    });
    return (result.length > 0)
  }


}
