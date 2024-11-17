import { DivComponent } from '../../common/div-component';
import './loading.css';

export class Loading extends DivComponent {
  constructor() {
    super();
  }

  render() {
    this.el.classList.add('loading');
    this.el.innerHTML = `
      <img src="./static/icon/loading.svg" alt="loading" class="loading" />
    `;

    return this.el;
  }
}
