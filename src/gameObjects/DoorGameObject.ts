import { GameObject } from './gameObject';
export class DoorGameObject extends GameObject {
  private collectInFrames = 0;
  isSolid(_gameObject): boolean {
    return true
  }

  update() {
    if (this.collectInFrames > 0) {
      this.collectInFrames -= 1;
      this.tileSetX = 3;
      if (this.collectInFrames === 0) {
        this.destroy();
      }
    }
  }

  canBeUnlocked() {
    return this.scene.inventory.has("key");
  }

  unlock() {
    if (this.collectInFrames > 0) {
      return;
    }
    this.collectInFrames = 11;
  }

  renderComponent() {
    return `render-sprite`;
  }
}
