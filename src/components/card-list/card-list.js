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

    const cardGrid = document.createElement('div');
    cardGrid.classList.add('card-grid');

    for (const card of this.state.list) {
      cardGrid.append(new Card(this.appState, card).render());
    }

    this.el.append(cardGrid);

    return this.el;
  }
}
