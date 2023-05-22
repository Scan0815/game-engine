import { Component, Host, h } from '@stencil/core';
import { CurrentSceneAtom } from '../../../atom/currentScene';

@Component({
  tag: 'hud-level-complete-message',
  styleUrl: 'hud-level-complete-message.scss',
  shadow: true,
})
export class HudLevelCompleteMessage {

  render() {
    return (
      <Host style={{
        position: "absolute",
        left: "0",
        top: "64px",
        color: "#000",
      }}>
        Level completed
        <button onClick={ev => {
          ev.preventDefault();
          CurrentSceneAtom.set(1)
        }
        }>next Level</button>
      </Host>
    );
  }

}
