export default function makeDropDown(menuRoot) {
  const menuItems = menuRoot.querySelector('.menu-items');
  const menuTitle = menuRoot.querySelector('.menu-title');
  menuTitle.addEventListener('mouseenter', () => {
    menuItems.classList.add('active');
  });
  menuRoot.addEventListener('mouseleave', () => {
    menuItems.classList.remove('active');
  });
}
