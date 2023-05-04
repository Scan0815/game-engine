import { Component, h, ComponentInterface, Prop, Host} from '@stencil/core';
import { CELL_SIZE } from '../../../helpers/consts';

@Component({
  tag: 'render-sprite',
  styleUrl: 'render-sprite.scss',
  shadow: true,
})
export class RenderSprite implements ComponentInterface {

  @Prop() image: CanvasImageSource;
  @Prop() frameCoord: string;
  @Prop() size: number = 16;

  renderImage(){
    if(this.image && this.ctx) {
      this.ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
      //Draw a graphic to the canvas tag
      const tileSheetX = Number(this.frameCoord.split("x")[0]);
      const tileSheetY = Number(this.frameCoord.split("x")[1]);
      this.ctx.drawImage(
        this.image, // Image to pull from
        tileSheetX * CELL_SIZE, // Left X corner of frame
        tileSheetY * CELL_SIZE, // Top Y corner of frame
        this.size, //How much to crop from the sprite sheet (X)
        this.size, //How much to crop from the sprite sheet (Y)
        0, //Where to place this on canvas tag X (0)
        0, //Where to place this on canvas tag Y (0)
        this.size, //How large to scale it (X)
        this.size //How large to scale it (Y)
      );
    }
  }
  private canvasEl: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  componentDidLoad() {
    this.ctx = this.canvasEl.getContext("2d");
  }

  componentDidRender() {
    this.renderImage();
  }

  render() {
    return (<Host>
      <canvas width={this.size} height={this.size} ref={ref => this.canvasEl = ref}/>
    </Host>);
  }

}
