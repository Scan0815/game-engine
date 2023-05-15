import { GameObject } from './gameObject';
import { DIRECTION_RIGHT, directionUpdateMap, hero } from '../helpers/consts';

export class HeroGameObject extends GameObject {

  constructor(properties, scene) {
    super(properties, scene);
    this.tileSetX = hero[DIRECTION_RIGHT].tileSetX;
    this.tileSetY = hero[DIRECTION_RIGHT].tileSetY;
  }

  update() {
    this.updateMovingPixelProgress();
  }

  updateMovingPixelProgress(){
    if(this.movingPixelsRemaining === 0){
      return;
    }
    this.movingPixelsRemaining -= this.travelPixelsPerFrame;
    if(this.movingPixelsRemaining <= 0){
      this.movingPixelsRemaining = 0;
      this.onDoneMoving();
    }
  }

  controllerMoveRequested(direction) {
    //Attempt to start moving
    if (this.movingPixelsRemaining > 0) {
      return;
    }
    //Start the move
    this.movingPixelsRemaining = 16;
    this.movingPixelDirection = DIRECTION_RIGHT;
    this.movingPixelDirection = direction;
    this.updateFacingDirection();
    this.updateWalkFame();
  }

  updateFacingDirection(){
    this.spriteFacingDirection = this.movingPixelDirection;
  }


  updateWalkFame(){
    this.tileSetX = hero[this.movingPixelDirection].tileSetX;
    this.tileSetY = hero[this.movingPixelDirection].tileSetY;
  }

  onDoneMoving(){
    const {x,y} = directionUpdateMap[this.movingPixelDirection]
    this.x += x;
    this.y += y;
  }


  renderComponent() {
    return `render-hero`;
  }


}
