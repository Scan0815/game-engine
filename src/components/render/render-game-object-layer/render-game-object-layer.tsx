import { Component, Host, h, Prop, ComponentInterface, Method } from '@stencil/core';
import { gameObjectFactory } from '../../../classes/GameObjectFactory';
import { GameObject } from '../../../gameObjects/gameObject';
import { GameLoop } from '../../../classes/GameLoop';
import { Scene } from '../../../classes/Scene';
import { DirectionControls } from '../../../classes/DirectionControls';
import { HeroGameObject } from '../../../gameObjects/HeroGameObject';
import { CompleteSceneAtom } from '../../../atom/completeScene';

@Component({
  tag: 'render-game-object-layer',
  styleUrl: 'render-game-object-layer.scss',
  shadow: true,
})
export class RenderGameObjectLayer implements ComponentInterface{
  @Prop() image: CanvasImageSource;
  @Prop({mutable:true}) scene: Scene;
  private gameLoop;
  private directionControls = new DirectionControls();
  private heroRef: HeroGameObject;


  async componentWillLoad() {
    await this.startScene();
    CompleteSceneAtom.get().subscribe(completed => {
      if(completed){
        this.gameLoop.stop();
        this.scene.isCompleted = true;
        CompleteSceneAtom.set(false);
      }
    })
  }

  @Method()
  async startScene(scene = null){
    if(scene) {
      this.scene = scene;
    }
    this.scene.gameObjects = this.scene.layers.layers.gameObjects
      .map(gameObject => gameObjectFactory.createGameObject(gameObject,this.scene))
      .filter(n => n);
    this.startGameLoop();
    this.heroRef = (this.scene.gameObjects.find((p) => p.type === "hero")) as HeroGameObject;
  }

  startGameLoop() {
    this.gameLoop?.stop();
    this.gameLoop = new GameLoop(() => {
      this.tick();
    });
  }

  tick() {
    if (this.directionControls.direction) {
      this.heroRef.controllerMoveRequested(this.directionControls.direction);
    }
    // Call 'tick' on any Placement that wants to update
    this.scene?.gameObjects?.filter(gameObject => !gameObject.hasBeenCollected)
      .forEach((gameObject) => {
      gameObject.update();
    });
    this.scene.onEmit(this.scene);
  }

  disconnectedCallback() {
    this.gameLoop?.stop();
    this.directionControls.unbind();
  }

  renderSprite(gameObject:GameObject) {
    if(!gameObject){
      return;
    }
    const Tag = gameObject.renderComponent();
    const [x,y] = gameObject.displayXY();
    const yTranslate = gameObject?.getYTranslate()
    const style = {
      position: 'absolute',
      zIndex: gameObject?.zIndex().toString(),
      height: this.scene.layers.cellSize + 'px',
      width: this.scene.layers.cellSize + 'px',
      transform: `translate3d(${x}px, ${y}px, 0)`,
    };
    return (<div style={style} id={gameObject.id}>
      {<Tag
        yTranslate={yTranslate}
        tileSetX={gameObject.tileSetX}
        tileSetY={gameObject.tileSetY}
        cellSize={this.scene.layers.cellSize}/>}
    </div>);
  }
  render() {
    return (
      <Host
        style={{
          width:(this.scene.layers.cols * this.scene.layers.cellSize)+"px",
          height:(this.scene.layers.cols * this.scene.layers.cellSize)+"px"
        }}>
        {this.scene.gameObjects?.filter(gameObject => !gameObject.hasBeenCollected)
          .map(gameObject => this.renderSprite(gameObject))
        }
      </Host>
    );
  }

}
