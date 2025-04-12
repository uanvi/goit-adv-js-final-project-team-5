import '../../css/loader.css';

export class Loader {
  constructor() {
    this.backdrop = document.createElement('div');
    this.backdrop.className = 'loader-backdrop';
    this.backdrop.innerHTML = `<div class="loader"></div>`;
  }

  show() {
    if (!document.body.contains(this.backdrop)) {
      document.body.appendChild(this.backdrop);
    }
  }

  hide() {
    if (document.body.contains(this.backdrop)) {
      document.body.removeChild(this.backdrop);
    }
  }
}
