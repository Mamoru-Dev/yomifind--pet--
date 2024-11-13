import { AbstractView } from '../../common/view.js';
import onChange from 'on-change';
import { Header } from '../../components/header/header.js';
import { Search } from '../../components/search/search.js';

export class MainView extends AbstractView {
  state = {
    list: [],
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

  appStateHook(path) {
    if (path === 'favorites') {
      this.render();
    }
  }

  async stateHook(path) {
    if (path === 'searchQuery') {
      this.state.loading = true;
      const data = await this.loadList(this.state.searchQuery, this.state.startIndex);
      this.state.loading = false;
      console.log(data);
      // this.state.list = data;
    }
  }

  async loadList(q, startIndex) {
    console.log('im here');
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${q}&startIndex=${startIndex}`
    );
    return res.json();
  }

  render() {
    const main = document.createElement('div');
    main.append(new Search(this.state).render());
    this.app.innerHTML = '';
    this.app.append(main);
    this.renderHeader();
  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.app.prepend(header);
  }
}
