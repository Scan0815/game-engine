import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true,
})
export class AppRoot implements ComponentInterface {

  async componentDidLoad() {

  }

  render() {
    return (<div/>);
  }
}
