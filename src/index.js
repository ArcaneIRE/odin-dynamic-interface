import makeDropDown from "./drop-down-menu.js";

const menuContainers = Array.from(document.querySelectorAll('.menu-container'));
menuContainers.forEach(node => makeDropDown(node));