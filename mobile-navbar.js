function makeActivateSidebarOnClick(buttonElem, activateableElem) {
  buttonElem.addEventListener('click', () => {
    activateableElem.classList.add('active');
  });
}

function makeDeactivateSidebarOnClick(buttonElem, activateableElem) {
  buttonElem.addEventListener('click', () => {
    activateableElem.classList.remove('active');
  });
}

function makeBackgroundDeactivateSidebar(background, activateableElem) {
  background.addEventListener('click', (e) => {
    if (e.target === background) {
      activateableElem.classList.remove('active');
    }
  });
}

const sidebarContainer = document.querySelector('.sidebar-container');
const headerMenuIcon = document.querySelector('header svg');
makeActivateSidebarOnClick(headerMenuIcon, sidebarContainer);
const navbarMenuIcon = document.querySelector('.sidebar-container nav svg');
makeDeactivateSidebarOnClick(navbarMenuIcon, sidebarContainer);
makeBackgroundDeactivateSidebar(sidebarContainer, sidebarContainer);
