import { AbstractView } from '../../common/view.js';
import { Header } from '../../components/header/header.js';
import { CardList } from '../../components/card-list/card-list.js';

export class FavoritesView extends AbstractView {
  constructor(appState) {
    super();
    this.setTitle('Favorite books');
    this.appState = appState;
  }

  render() {
    const main = document.createElement('div');
    main.innerHTML = `<header class="card-list__header">Favorite books</header>`;
    main.append(new CardList(this.appState, { list: this.appState.favorites }).render());

    this.app.innerHTML = '';
    this.app.append(main);
    this.renderHeader();
  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.app.prepend(header);
  }
}
