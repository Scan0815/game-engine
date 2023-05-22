import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'render-elevated-sprite',
  styleUrl: 'render-elevated-sprite.scss',
  shadow: true,
})
export class RenderElevatedSprite {

  @Prop() tileSetX : number;
  @Prop() tileSetY : number;
  @Prop() yTranslate : number;

  render() {
    return (
      <Host>
        <render-sprite tileSetX={3} tileSetY={1} cellSize={16}/>
        <render-sprite class="bodyContainer"
                       style={{
                         transform: `translateY(${this.yTranslate}px)`,
                       }}
                       tileSetX={this.tileSetX} tileSetY={this.tileSetY} cellSize={16}/>
      </Host>
    );
  }

}
