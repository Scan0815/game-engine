import { GameObject } from './gameObject';

export class GoalGameObject extends GameObject {
  renderComponent() {
    return `render-sprite`;
  }
}
