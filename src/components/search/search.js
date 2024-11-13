import { DivComponent } from '../../common/div-component';
import './search.css';

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  render() {
    this.el.classList.add('search');
    this.el.innerHTML = `
      <div class="search__wrapper">
        <input
          type="text"
          placeholder="Search book or author...."
          class="search__input"
          value="${this.state.searchQuery ? this.state.searchQuery : ''}"
        />
        <img src="/static/icon/search.svg" alt="search" />
      </div>
      <button aria-label="Search" class="search__button">
        <img src="/static/icon/search-white.svg" alt="search-btn" />
      </button>
    `;

    return this.el;
  }
}
