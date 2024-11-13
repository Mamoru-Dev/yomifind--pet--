'use strict';

import { FavoritesView } from './views/favorites/favotires.js';
import { MainView } from './views/main/main.js';

class App {
  routes = [
    { path: '', view: MainView },
    { path: '#favorites', view: FavoritesView },
  ];
  appState = {
    favorites: [],
  };

  constructor() {
    window.addEventListener('hashchange', this.route.bind(this));
    this.route();
  }

  route() {
    if (this.currentView) this.currentView.destroy();

    const view = this.routes.find((route) => route.path === location.hash).view;

    this.currentView = new view(this.appState);
    this.currentView.render();
  }
}

new App();
