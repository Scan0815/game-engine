import { GameObject } from './gameObject';
import { DIRECTION_RIGHT, directionUpdateMap, hero } from '../helpers/consts';
import { Collision } from '../classes/Collision';
import { CompleteSceneAtom } from '../atom/completeScene';

export class HeroGameObject extends GameObject {

  constructor(properties, scene) {
    super(properties, scene);
    this.resetToIdle();
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

    const possibleLock = this.getLockAtNextPosition(direction);
    if (possibleLock) {
      possibleLock.unlock();
      return;
    }

    if (this.isSolidAtNextPosition(direction)) {
      return;
    }

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
    this.spriteWalkFrame = this.spriteWalkFrame === 1 ? 0 : 1;
    const animation = this.spriteWalkFrame === 0 ? "WALK1" : "WALK2";
    this.tileSetX = hero[animation][this.movingPixelDirection].tileSetX;
    this.tileSetY = hero[animation][this.movingPixelDirection].tileSetY;
  }

  resetToIdle(){
    this.tileSetX = hero.IDLE[this.movingPixelDirection].tileSetX;
    this.tileSetY = hero.IDLE[this.movingPixelDirection].tileSetY;
  }

  getCollisionAtNextPosition(direction) {
    const { x, y } = directionUpdateMap[direction];
    const nextX = this.x + x;
    const nextY = this.y + y;
    return new Collision(this, {
      x: nextX,
      y: nextY,
    });
  }

  isSolidAtNextPosition(direction) {
    const collision = this.getCollisionAtNextPosition(direction);
    const isAWall = this.scene?.isAtPositionAWall(collision.x,collision.y);
    if (isAWall) {
      return true;
    }
    return Boolean(collision.withSolidGameObject());
  }

  getLockAtNextPosition(direction) {
    const collision = this.getCollisionAtNextPosition(direction);
    return collision.withLock();
  }


  onDoneMoving(){
    const {x,y} = directionUpdateMap[this.movingPixelDirection]
    this.x += x;
    this.y += y;
    this.handleCollisions();
    this.resetToIdle()
  }

  handleCollisions() {
    // handle collisions!
    const collision = new Collision(this);
    const collideThatAddsToInventory = collision.withPlacementAddsToInventory();
    if (collideThatAddsToInventory) {
      collideThatAddsToInventory.collect();
      this.scene.addGameObject({
        type:"particle",
        name: "celebrate",
        x: this.x,
        y: this.y
      })
    }
    const completesScene = collision.withCompletesLevel();
    if (completesScene) {
      CompleteSceneAtom.set(true);
    }
  }

  getYTranslate(){
    if (this.movingPixelsRemaining === 0) {
      return 0;
    }
    //Elevate ramp up or down at beginning/end of movement
    const PIXELS_FROM_END = 2;
    if (
      this.movingPixelsRemaining < PIXELS_FROM_END ||
      this.movingPixelsRemaining > 16 - PIXELS_FROM_END
    ) {
      return -1;
    }

    // Highest in the middle of the movement
    return -2;
  }

  zIndex() {
    return this.y * 10 + 1;
  }


  renderComponent() {
    return `render-hero`;
  }


}
