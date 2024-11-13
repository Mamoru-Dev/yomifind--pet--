import { AbstractView } from '../../common/view.js';
import onChange from 'on-change';
import { Header } from '../../components/header/header.js';
import { Search } from '../../components/search/search.js';
import { CardList } from '../../components/card-list/card-list.js';

export class MainView extends AbstractView {
  state = {
    list: [],
    totalItems: 0,
    loading: false,
    searchQuery: undefined,
    startIndex: 0,
  };

  constructor(appState) {
    super();
    this.setTitle('Search books');
    this.appState = appState;

    // Подписываемся на слежку за изменением объекта appState (Library: on-change)
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
    this.state = onChange(this.state, this.stateHook.bind(this));
  }

  destroy() {
    onChange.unsubscribe(this.appState);
    onChange.unsubscribe(this.state);
  }

  appStateHook(path) {
    if (path === 'favorites') {
      this.render();
    }
  }

  async stateHook(path) {
    if (path === 'searchQuery') {
      this.state.loading = true;
      const data = await this.loadList(this.state.searchQuery, this.state.startIndex);
      this.state.list = [...data.items];
      this.state.totalItems = data.totalItems;
      this.state.loading = false;
    }

    if (path === 'loading') {
      this.render();
    }

    if (path === 'list') {
      this.render();
    }
  }

  async loadList(q, startIndex) {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${q}&startIndex=${startIndex}&maxResults=9`
    );
    return res.json();
  }

  render() {
    const main = document.createElement('div');
    main.append(new Search(this.state).render());
    main.insertAdjacentHTML(
      'beforeend',
      `<header class="card-list__header">Books found - ${this.state.totalItems}</header>`
    );
    main.append(new CardList(this.appState, this.state).render());

    this.app.innerHTML = '';
    this.app.append(main);
    this.renderHeader();
  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.app.prepend(header);
  }
}
