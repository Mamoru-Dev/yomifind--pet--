import { DivComponent } from '../../common/div-component';
import './card.css';

export class Card extends DivComponent {
  constructor(appState, card) {
    super();
    this.appState = appState;
    this.card = card;
  }

  toggleFavorite() {
    if (this.appState.favorites.find((b) => b.id === this.card.id)) {
      this.appState.favorites = this.appState.favorites.filter((b) => b.id !== this.card.id);
    } else {
      this.appState.favorites.push({ id: this.card.id });
    }
  }

  render() {
    this.el.classList.add('card');

    const existInFavorites = this.appState.favorites.find((b) => b.id === this.card.id);

    this.el.innerHTML = `
      <div class="card__image">
        <img src=${this.card.volumeInfo.imageLinks?.thumbnail} alt="Book Image" />
      </div>
      <div class="card__info">
        <div class="card__tag">
          ${this.card.volumeInfo.categories ? this.card.volumeInfo.categories[0] : 'Not Found'}
        </div>
        <div class="card__name">
          ${this.card.volumeInfo.title}
        </div>
        <div class="card__author">
          ${this.card.volumeInfo.authors ? this.card.volumeInfo.authors[0] : 'Not Found'}
        </div>
        <div class="card__footer">
          <button class="button__add ${existInFavorites ? 'button__active' : ''}" >
            ${
              existInFavorites
                ? '<img src="/static/icon/favorite.svg" alt="Remove from favorites"  />'
                : '<img src="/static/icon/favorite-white.svg" alr="Add to favorites" />'
            }
          </button>
        </div>
      </div>
    `;

    this.el.querySelector('.button__add').addEventListener('click', this.toggleFavorite.bind(this));

    return this.el;
  }
}
