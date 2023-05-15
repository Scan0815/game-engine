export type TLayer = 'foreground'|'middleground'|'background'|'gameObjects'|'walls';

export interface ITileMapLayer {
  cols:number,
  rows:number,
  cellSize:number,
  layers: ITileMapLayers
}

export interface ITileMapLayers {
  foreground: ITileMapItem[],
  middleground: ITileMapItem[],
  gameObjects:  ITileMapItem[],
  background: ITileMapItem[],
  walls:  ITileMapItem[]
}

export interface ITileMapItem {
  x: number,
  y: number,
  id?: string,
  name?: string,
  width?: number,
  height?: number
  tileSetX?: number,
  tileSetY?: number,
  tags?: string[],
  type?: string
}
