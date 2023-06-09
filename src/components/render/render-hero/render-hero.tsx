import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'render-hero',
  styleUrl: 'render-hero.scss',
  shadow: true,
})
export class RenderHero {

  @Prop() tileSetX : number;
  @Prop() tileSetY : number;
  @Prop() yTranslate : number;

  render() {
    return (
      <Host>
        <render-sprite tileSetX={3} tileSetY={1} cellSize={16}/>
        <render-sprite class="hero"
                       style={{
                         transform: `translateY(${this.yTranslate}px)`,
                       }}
                       tileSetX={this.tileSetX} tileSetY={this.tileSetY} cellSize={32}/>
      </Host>
    );
  }

}
