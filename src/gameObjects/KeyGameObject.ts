import { GameObject } from './gameObject';
export class KeyGameObject extends GameObject {

  isSolid(_gameObject): boolean {
    return false
  }

  addsItemToInventoryOnCollide() {
    return this.type;
  }

  getYTranslate(){
    return -4;
  }

  renderComponent() {
    return `render-elevated-sprite`;
  }
}
