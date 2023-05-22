import { IScene } from '../interfaces/Scene';
import { ITileMapItem } from '../interfaces/TileMapLayer';
import { HeroGameObject } from '../gameObjects/HeroGameObject';
import { GoalGameObject } from '../gameObjects/GoalGameObject';
import { KeyGameObject } from '../gameObjects/KeyGameObject';
import { DiamondGameObject } from '../gameObjects/DiamondGameObject';
import { ParticleGameObject } from '../gameObjects/ParticleGameObject';
import { DoorGameObject } from '../gameObjects/DoorGameObject';
export class GameObjectFactory {
  createGameObject(config: ITileMapItem, scene: IScene) {
    return this.getInstance(config, scene);
  }

  private gameObjectTypeClassMap = {
    "hero" : HeroGameObject,
    "goal" : GoalGameObject,
    "key" : KeyGameObject,
    "diamond" : DiamondGameObject,
    "door": DoorGameObject,
    "particle" : ParticleGameObject,
  }

  getInstance(config, scene) {
    const gameObjectClass = this.gameObjectTypeClassMap[config.type];
    if (!gameObjectClass) {
      console.warn("NO TYPE FOUND", config.type);
      return null;
    }
    return new gameObjectClass(config, scene)
  }

}
export const gameObjectFactory = new GameObjectFactory();
