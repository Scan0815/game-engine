

export const DIRECTION_LEFT = "LEFT";
export const DIRECTION_RIGHT = "RIGHT";
export const DIRECTION_UP = "UP";
export const DIRECTION_DOWN = "DOWN";

export const directionUpdateMap = {
  [DIRECTION_LEFT] : {x:-1,y:0},
  [DIRECTION_RIGHT] : {x:1,y:0},
  [DIRECTION_UP] : {x:0,y:-1},
  [DIRECTION_DOWN] : {x:0,y:1}
}

export const hero = {
  [DIRECTION_LEFT] : {tileSetX:2,tileSetY:4},
  [DIRECTION_RIGHT] : {tileSetX:1,tileSetY:4},
  [DIRECTION_UP] : {tileSetX:3,tileSetY:4},
  [DIRECTION_DOWN] : {tileSetX:0,tileSetY:4}
}
