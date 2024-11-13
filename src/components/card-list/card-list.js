import { DivComponent } from '../../common/div-component';
import { Card } from '../card/card';
import { Loading } from '../loading/loading';
import './card-list.css';

export class CardList extends DivComponent {
  constructor(appState, state) {
    super();
    this.appState = appState;
    this.state = state;
  }

  render() {
    if (this.state.loading) {
      this.el.append(new Loading().render());
      return this.el;
    }

    this.el.classList.add('card-list');
    this.el.innerHTML = `
      <header class="card-list__header">Books found - ${this.state.totalItems}</header>
    `;

    for (const card of this.state.list) {
      this.el.append(new Card(this.appState, card).render());
    }

    return this.el;
  }
}
