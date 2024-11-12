(function () {
  'use strict';

  class AbstractView {
    constructor() {
      this.app = document.getElementById('root');
    }

    setTitle(title) {
      document.title = title;
    }

    render() {
      return;
    }

    destroy() {
      return;
    }
  }

  class MainView extends AbstractView {
    state = {
      list: [],
      loading: false,
      searchQuery: undefined,
      offset: 0,
    };

    constructor(appState) {
      super();
      this.appState = appState;
      this.setTitle('Search books');
    }

    render() {
      const main = document.createElement('div');
      main.innerHTML = `Число книг: ${this.appState.favorites.length}`;
      this.app.innerHTML = '';
      this.app.append(main);
    }
  }

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

})();
