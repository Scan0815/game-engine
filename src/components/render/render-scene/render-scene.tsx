import { Component, Host, h, ComponentInterface, State } from '@stencil/core';
import { Game } from '../../../classes/Game';
import { Scene } from '../../../classes/Scene';
import { CurrentSceneAtom } from '../../../atom/currentScene';

@Component({
  tag: 'render-scene',
  styleUrl: 'render-scene.scss',
  shadow: true,
})
export class RenderScene implements ComponentInterface{
  @State() spriteSheetImage: CanvasImageSource;
  @State() activeScene: Scene;
  @State() game: Game;

  private gameObjectLayer: HTMLRenderGameObjectLayerElement;
  async componentWillLoad() {
    CurrentSceneAtom.get().subscribe(sceneIndex => {
      this.activeScene = this.game.goToScene(sceneIndex);
      this.gameObjectLayer.startScene(this.activeScene);
    });
    this.game = new Game(0,(activeScene) => {
      this.activeScene = {...activeScene} as Scene;
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
          <render-game-object-layer ref={ref => this.gameObjectLayer = ref} image={this.spriteSheetImage} scene={this.activeScene}></render-game-object-layer>
          <render-layer image={this.spriteSheetImage} layer="foreground" scene={this.activeScene}></render-layer>
        </div>
        <hud-diamond-count scene={this.activeScene}></hud-diamond-count>
        {this.activeScene.isCompleted && <hud-level-complete-message></hud-level-complete-message>}
      </Host>
    );
  }

}
