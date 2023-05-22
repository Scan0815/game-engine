import { Component, h, ComponentInterface, Prop, State, Watch } from '@stencil/core';
import { SpriteSheetImageAtom } from '../../../atom/spriteSheetImage';

@Component({
  tag: 'render-sprite',
  styleUrl: 'render-sprite.scss',
  shadow: true,
})
export class RenderSprite implements ComponentInterface {

  @Prop() tileSetX : number;
  @Prop() tileSetY : number;
  @Prop() cellSize: number = 16;
  @State() image: CanvasImageSource;
  private canvasEl: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  @Watch("tileSetX")
  @Watch("tileSetY")
  changeTileSet(oldValue,newValue){
    if(oldValue !== newValue) {
      this.renderImage();
    }
  }


  componentWillLoad() {
    SpriteSheetImageAtom.get().subscribe(image => {
      if(image) {
        this.image = image;
      }
    })
  }

  componentDidLoad() {
    this.ctx = this.canvasEl.getContext("2d");
    this.renderImage();
  }

  renderImage(){
    this.ctx?.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
    //Draw a graphic to the canvas tag
    this.ctx?.drawImage(
      this.image, // Image to pull from
      this.tileSetX * this.cellSize, // Left X corner of frame
      this.tileSetY * this.cellSize, // Top Y corner of frame
      this.cellSize, //How much to crop from the sprite sheet (X)
      this.cellSize, //How much to crop from the sprite sheet (Y)
      0, //Where to place this on canvas tag X (0)
      0, //Where to place this on canvas tag Y (0)
      this.cellSize, //How large to scale it (X)
      this.cellSize //How large to scale it (Y)
    );
  }

  render() {
    return (<canvas width={this.cellSize} height={this.cellSize} ref={ref => this.canvasEl = ref}/>);
  }

}
