// eslint-disable-next-line import/extensions
import makeDropDown from './drop-down-menu.js';
// eslint-disable-next-line import/extensions
import './carousel.js';

const menuContainers = Array.from(document.querySelectorAll('.menu-container'));
menuContainers.forEach((node) => makeDropDown(node));
