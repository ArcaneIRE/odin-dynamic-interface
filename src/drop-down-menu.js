export default function makeDropDown(menuRoot) {
  const menuTitle = menuRoot.querySelector('.menu-title');
  menuTitle.addEventListener('mouseenter', () => {
    menuRoot.classList.add('active');
  });
  menuRoot.addEventListener('mouseleave', () => {
    menuRoot.classList.remove('active');
  });
}
