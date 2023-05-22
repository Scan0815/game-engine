import { GameObject } from './gameObject';

export class GoalGameObject extends GameObject {
  get isDisabled() {
    const nonCollectedDiamonds = this.scene.gameObjects.find((gO) => {
      return gO.type === "diamond" && !gO.hasBeenCollected;
    });
    return Boolean(nonCollectedDiamonds);
  }

  update() {
    if(!this.isDisabled){
      this.tileSetX = 7;
    }
  }

  completesLevelOnCollide() {
    return !this.isDisabled;
  }
  renderComponent() {
    return `render-sprite`;
  }
}
