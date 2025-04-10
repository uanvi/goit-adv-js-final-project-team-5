import '../../css/scroll-up.css';
import { setupScrollLogic } from '../models/scroll-up-model.js';

export function createScrollUpButton() {
  const button = document.createElement('button');
  button.id = 'scrollUpBtn';
  button.title = 'Up';
  button.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path d="M12 4L12 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5 11L12 4L19 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;
  document.body.appendChild(button);

  setupScrollLogic(button);
}
