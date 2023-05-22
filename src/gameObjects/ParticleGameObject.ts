import { GameObject } from './gameObject';
import { IScene } from '../interfaces/Scene';
import { particle } from '../helpers/consts';
export class ParticleGameObject extends GameObject {

  frame = 0;
  travelPixelsPerFrame = 0.5
  constructor(properties: any, scene:IScene) {
    super(properties, scene);
  }

  update() {
    const particle$ = particle[this.name][Math.ceil(this.frame)];
    this.tileSetX =  particle$.tileSetX;
    this.tileSetY =  particle$.tileSetY;
    if (this.frame < 7) {
      this.frame += this.travelPixelsPerFrame;
      return;
    }
    this.destroy();
  }

  zIndex() {
    return this.y * 10 + 2;
  }

  renderComponent() {
    return `render-sprite`;
  }
}
