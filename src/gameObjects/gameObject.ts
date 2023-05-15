import { IScene } from '../interfaces/Scene';
import { DIRECTION_LEFT, DIRECTION_RIGHT, DIRECTION_UP } from '../helpers/consts';

export class GameObject {
  x: number;
  y: number;
  id?: string;
  name?: string;
  width?: number;
  height?: number;
  tileSetX?: number;
  tileSetY?: number;
  tags?: string[];
  type?: string;
  scene: IScene;

  travelPixelsPerFrame = 1.5;
  movingPixelsRemaining = 0;
  movingPixelDirection = DIRECTION_RIGHT;
  spriteFacingDirection = DIRECTION_RIGHT;
  spriteWalkFrame = 0;
  constructor(properties: any, scene:IScene) {
    this.x = properties.x;
    this.y = properties.y;
    this.name = properties.name;
    this.tags = properties.tags;
    this.tileSetX = properties.tileSetX;
    this.tileSetY = properties.tileSetY;
    this.type = properties.type;
    this.scene = scene;
  }

  displayXY(){
    if(this.movingPixelsRemaining > 0){
      return this.displayMovingXY();
    }
    const x = this.x * this.scene.layers.cellSize;
    const y = this.y * this.scene.layers.cellSize;
    return [x, y];
  }

  getTileSetPosition(){
    return [this.tileSetX,this.tileSetY];
  }

  displayMovingXY(){
    const x = this.x * this.scene.layers.cellSize;
    const y = this.y * this.scene.layers.cellSize;
    const progressPixels = this.scene.layers.cellSize - this.movingPixelsRemaining;

    switch (this.movingPixelDirection) {
      case DIRECTION_LEFT:
        return [x - progressPixels,y];
      case DIRECTION_RIGHT:
        return [x + progressPixels,y];
      case DIRECTION_UP:
        return [x,y - progressPixels];
      default:
        return [x,y + progressPixels];
    }


  }

  renderComponent() {
    return null;
  }


  update() {
    return null;
  }

  destroy() {
    return null;
  }

}
