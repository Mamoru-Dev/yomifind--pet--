export class AbstractView {
  constructor() {
    this.app = document.getElementById('id');
  }

  setTitle(title) {
    document.title = title;
  }

  render() {
    return;
  }

  destroy() {
    return;
  }
}
