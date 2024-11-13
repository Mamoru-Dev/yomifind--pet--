export class DivComponent {
  constructor() {
    this.el = document.createElement('div');
  }

  // Возвращает сконструированный элемент
  render() {
    return this.el;
  }
}
