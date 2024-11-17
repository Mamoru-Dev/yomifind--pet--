import { DivComponent } from '../../common/div-component';
import './header.css';

export class Header extends DivComponent {
  constructor(appState) {
    super();
    this.appState = appState;
  }

  render() {
    this.el.classList.add('header');
    this.el.innerHTML = `
      <div>
        <img src="./static/icon/logo.svg" alt="logo" class="header__logo" />
      </div>
      <div class="menu">
        <a class="menu__item" href="#">
          <img src="./static/icon/search.svg" alt="search" />
          Search books
        </a>
        <a class="menu__item" href="#favorites">
          <img src="./static/icon/favorite.svg" alt="favorites" />
          Favorites
        </a>
        <div class="menu__counter">
          ${this.appState.favorites.length}
        </div>
      </div>
    `;

    return this.el;
  }
}
