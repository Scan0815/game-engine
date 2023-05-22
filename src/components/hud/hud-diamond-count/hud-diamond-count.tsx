import { Component, Host, h, Prop } from '@stencil/core';
import { IScene } from '../../../interfaces/Scene';

@Component({
  tag: 'hud-diamond-count',
  styleUrl: 'hud-diamond-count.scss',
  shadow: true,
})
export class HudDiamondCount {

  @Prop()  scene: IScene;

  render() {
    const count = this.scene?.gameObjects?.filter((p) => {
      return p.type === "diamond" && !p.hasBeenCollected;
    }).length;
    return (
      <Host style={{
        position: "absolute",
        left: "0",
        top: "0",
        color: "#000",
      }}>
        Diamond Remaining: {count}
      </Host>
    );
  }

}
