import { Component, Host, h, Prop } from '@stencil/core';
import { IScene } from '../../../interfaces/Scene';
import { TLayer } from '../../../interfaces/TileMapLayer';

@Component({
  tag: 'render-layer',
  styleUrl: 'render-layer.scss',
  shadow: true,
})
export class RenderLayer {
  @Prop() image: CanvasImageSource;
  @Prop() scene: IScene;
  @Prop() layer: TLayer = "background";
  private canvasEl: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  componentDidLoad() {
    this.ctx = this.canvasEl.getContext("2d");
    this.renderImage();
  }

  renderImage(){
    this.ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
    //Draw a graphic to the canvas tag
    this.scene.layers.layers[this.layer].map(item => {
      this.ctx.drawImage(
        this.image, // Image to pull from
        item.tileSetX * this.scene.layers.cellSize,
        item.tileSetY * this.scene.layers.cellSize,
        this.scene.layers.cellSize,
        this.scene.layers.cellSize,
        item.x * this.scene.layers.cellSize,
        item.y * this.scene.layers.cellSize,
        this.scene.layers.cellSize,
        this.scene.layers.cellSize,
      );
    })
  }

  render() {
    return (
      <Host
        style={{
          width:(this.scene.layers.cols * this.scene.layers.cellSize)+"px",
          height:(this.scene.layers.cols * this.scene.layers.cellSize)+"px"
        }}
        class={{
        [this.layer] : true
      }}>
        <canvas
          width={this.scene.layers.cols * this.scene.layers.cellSize}
          height={this.scene.layers.cols * this.scene.layers.cellSize}
          ref={ref => this.canvasEl = ref}/>
      </Host>
    );
  }

}
