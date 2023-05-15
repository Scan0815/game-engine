
export interface IGameObject {
  x: number,
  y: number,
  id?: string,
  name?: string,
  width?: number,
  height?: number
  tileSetX: number,
  tileSetY: number,
  tags?: string[],
  type: string
}
