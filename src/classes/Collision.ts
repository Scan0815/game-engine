import { GameObject } from '../gameObjects/gameObject';

export class Collision {
  private readonly gameObject;
  private gameObjectAtPosition = [];
  public readonly x:number;
  public readonly y:number;
  constructor(gameObject:GameObject, position = null) {
    this.gameObject = gameObject;
    this.gameObjectAtPosition = [];
    this.x = position ? position.x : gameObject.x;
    this.y = position ? position.y : gameObject.y;
    this.scanGameObjectAtPosition();
  }

  scanGameObjectAtPosition() {
    this.gameObjectAtPosition = this.gameObject.scene.gameObjects.filter(gO => {
      const isSelf = gO.id === this.gameObject.id;
      return !isSelf && gO.x === this.x && gO.y === this.y;
    });
  }

  withSolidGameObject() {
    return this.gameObjectAtPosition.find(gO =>
      gO.isSolid(this.gameObject)
    );
  }

  withPlacementAddsToInventory() {
    return this.gameObjectAtPosition.find((gO) => {
      return (
        !gO.hasBeenCollected && gO.addsItemToInventoryOnCollide(this.gameObject)
      );
    });
  }

  withCompletesLevel() {
    return this.gameObjectAtPosition.find((gO) => {
      return gO.completesLevelOnCollide();
    });
  }

  withLock() {
    return this.gameObjectAtPosition.find((gO) => {
      return gO.canBeUnlocked();
    });
  }

}
