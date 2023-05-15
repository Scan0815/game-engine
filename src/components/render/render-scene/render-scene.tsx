import { Component, Host, h, ComponentInterface, State } from '@stencil/core';
import { IScene } from '../../../interfaces/Scene';
import { Game } from '../../../classes/Game';

@Component({
  tag: 'render-scene',
  styleUrl: 'render-scene.scss',
  shadow: true,
})
export class RenderScene implements ComponentInterface{
  @State() spriteSheetImage: CanvasImageSource;
  @State() activeScene: IScene;
  @State() game: Game;
  async componentWillLoad() {
    this.game = new Game(0,(activeScene) => {
      this.activeScene = {...activeScene};
    });
    await this.game.start();
    this.activeScene = this.game.activeScene;
    this.spriteSheetImage = this.game.spriteSheetImage;
  }

  disconnectedCallback() {
    this.game.destroy();
  }

  render() {
    return (
      <Host class={{ fullScreenContainer: true }}>
        <div class={{ gameScreen: true }}>
          <render-layer image={this.spriteSheetImage} scene={this.activeScene}></render-layer>
          <render-layer image={this.spriteSheetImage} layer="middleground" scene={this.activeScene}></render-layer>
          <render-game-object-layer image={this.spriteSheetImage} scene={this.activeScene}></render-game-object-layer>
          <render-layer image={this.spriteSheetImage} layer="foreground" scene={this.activeScene}></render-layer>
        </div>
      </Host>
    );
  }

}
