import {createElement} from '../render.js';

const createLoadMoreButtonTemplate = () => '<button class="load-more" type="button">load more</button>';

export default class LoadMoreButtonView {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return createLoadMoreButtonTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}
