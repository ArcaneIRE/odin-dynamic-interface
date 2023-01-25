export default class NavDots {
  constructor(container, amount, setIndexCallback) {
    this.container = container;
    this.initialiseChildrenDots(amount, setIndexCallback);
  }

  initialiseChildrenDots(amount, setIndexCallback) {
    for (let i = 0; i < amount; i += 1) {
      const navDot = NavDots.createNavDot();
      navDot.addEventListener('click', () => {
        setIndexCallback(i);
      });
      this.container.appendChild(navDot);
    }

    this.navDots = this.container.children;
    this.setActiveDot(0);
  }

  static createNavDot() {
    const navDot = document.createElement('div');
    navDot.classList.add('nav-dot');
    return navDot;
  }

  setActiveDot(index) {
    for (let i = 0; i < this.navDots.length; i += 1) {
      this.navDots[i].classList.remove('active');
    }
    const activeDot = this.navDots[index];
    activeDot.classList.add('active');
  }
}
