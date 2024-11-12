'use strict';

import { MainView } from './views/main/main.js';

class App {
  routes = [{ path: '', view: MainView }];
  appState = {
    favorites: [],
  };

  constructor() {
    window.addEventListener('hashchange', this.route.bind(this));
    this.route();
  }

  route() {
    // Если у нас есть активная View мы ее уничтожаем
    if (this.currentView) this.currentView.destroy();

    // Находим текущую View по path
    const view = this.routes.find((route) => route.path === location.hash).view;

    // Рендерим найденную View
    this.currentView = new view(this.appState);
    this.currentView.render();
  }
}

new App();
