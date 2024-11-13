import { DivComponent } from '../../common/div-component';
import './card-list.css';

export class CardList extends DivComponent {
  constructor(appState, state) {
    super();
    this.appState = appState;
    this.state = state;
  }

  render() {
    this.el.classList.add('card-list');
    this.el.innerHTML = `
      <header class="card-list__header">Найдено книг - ${this.state.list.totalItems || 0}</header>
    `;

    return this.el;
  }
}
