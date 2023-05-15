import { IScene } from '../interfaces/Scene';
import { ITileMapItem } from '../interfaces/TileMapLayer';
import { HeroGameObject } from '../gameObjects/HeroGameObject';
import { GoalGameObject } from '../gameObjects/GoalGameObject';
import { KeyGameObject } from '../gameObjects/KeyGameObject';
export class GameObjectFactory {
  createGameObject(config: ITileMapItem, scene: IScene) {
    const instance = this.getInstance(config, scene);
    return instance;
  }

  getInstance(config, scene) {
    switch (config.type) {
      case "hero":
        return new HeroGameObject(config, scene);
      case "goal":
        return new GoalGameObject(config, scene);
      case "key":
        return new KeyGameObject(config, scene);
      default:
        console.warn("NO TYPE FOUND", config.type);
        return null;
    }
  }

}
export const gameObjectFactory = new GameObjectFactory();
