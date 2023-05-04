import { Component, ComponentInterface, h, State } from '@stencil/core';
import { SPRITE_SHEET_SRC } from '../../helpers/consts';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true,
})
export class AppRoot implements ComponentInterface {

  @State() image: CanvasImageSource;

  async componentDidLoad() {
    this.image = await new Promise(resolve => {
      const image = new Image();
      image.src = SPRITE_SHEET_SRC;
      image.onload = () => {
       resolve(image);
      };
    });
  }

  render() {
    return [
      <render-sprite image={this.image} frameCoord={"1x0"} />,
      <render-sprite image={this.image} frameCoord={"0x2"}/>,
      <render-sprite image={this.image} frameCoord={"0x3"}/>
    ];
  }
}
