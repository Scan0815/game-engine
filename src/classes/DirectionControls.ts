import { DIRECTION_DOWN, DIRECTION_LEFT, DIRECTION_RIGHT, DIRECTION_UP } from '../helpers/consts';

export class DirectionControls {
  private readonly heldDirections = [];
  private readonly  directionKeys = {
    ArrowDown: DIRECTION_DOWN,
    ArrowUp: DIRECTION_UP,
    ArrowLeft: DIRECTION_LEFT,
    ArrowRight: DIRECTION_RIGHT,
    s: DIRECTION_DOWN,
    w: DIRECTION_UP,
    a: DIRECTION_LEFT,
    d: DIRECTION_RIGHT,
  }

  directionKeyDownHandler = (e) => {
    const dir = this.directionKeys[e.key];
    if (dir && this.heldDirections.indexOf(dir) === -1) {
      this.heldDirections.unshift(dir);
    }
  };

  directionKeyUpHandler = (e) => {
    const dir = this.directionKeys[e.key];
    const index = this.heldDirections.indexOf(dir);
    if (index > -1) {
      this.heldDirections.splice(index, 1);
    }
  };

  constructor() {
    document.addEventListener("keydown", this.directionKeyDownHandler);
    document.addEventListener("keyup", this.directionKeyUpHandler);
  }

  get direction() {
    return this.heldDirections[0];
  }

  unbind() {
    document.removeEventListener("keydown", this.directionKeyDownHandler);
    document.removeEventListener("keyup", this.directionKeyUpHandler);
  }
}
