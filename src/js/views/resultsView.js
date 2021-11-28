import View from "./view.js";
import icons from "url:../../img/icons.svg";
class ResultsView extends View {
  _message = "";
  _errorMessage = "No items found.";
  _parentElement = document.querySelector(".results");
  _generateMarkup() {
    return this._data.map(this._generatePreviewMarkup).join();
  }
  _generatePreviewMarkup(e) {
    const id = window.location.hash.slice(1);
    return `<li class="preview">
      <a class="preview__link ${
        e.id === id ? "preview__link--active" : ""
      }" href="#${e.id}">
        <figure class="preview__fig">
          <img src=${e.image} alt=${e.title} />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${e.title}</h4>
          <p class="preview__publisher">${e.publisher}</p>
        </div>
      </a>
    </li>`;
  }
}
export default new ResultsView();
