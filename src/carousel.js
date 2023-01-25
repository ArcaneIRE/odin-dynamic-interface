// eslint-disable-next-line import/extensions
import NavDots from './nav-dots.js';

class Carousel {
  #index = 0;

  constructor(carouselContainer) {
    this.photoArray = carouselContainer.querySelector('.photos');

    const length = this.photoArray.childElementCount;
    this.maxIndex = length - 1;
    this.translationIncrement = 100 / length;

    const navDotsContaner = carouselContainer.querySelector('.nav-dots-container');
    this.navDots = new NavDots(navDotsContaner, length, (index) => {
      this.index = index;
    });

    this.mostRecentClick = Date.now();
    this.timeloop();
  }

  get index() {
    return this.#index;
  }

  set index(value) {
    this.#index = value;
    this.updateCss();

    this.mostRecentClick = Date.now();
  }

  updateCss() {
    this.updateTranslationCss();
    this.updateNavDotCss();
  }

  updateNavDotCss() {
    this.navDots.setActiveDot(this.index);
  }

  updateTranslationCss() {
    const translation = `${this.index * -100}%`;
    this.photoArray.style.setProperty('--translate-percent', translation);
  }

  nextPhoto() {
    if (this.index < this.maxIndex) {
      this.index += 1;
    }
  }

  previousPhoto() {
    if (this.index > 0) {
      this.index -= 1;
    }
  }

  timeloop() {
    setTimeout(() => {
      const timeSinceClick = Date.now() - this.mostRecentClick;
      if (timeSinceClick > 5000) {
        if (this.index < this.maxIndex) {
          this.index += 1;
        } else {
          this.index = 0;
        }
        this.timeSinceClick = Date.now();
      }
      this.timeloop();
    }, 1000);
  }
}

const carousel = new Carousel(document.querySelector('.carousel'));

const previousButton = document.querySelector('#previousButton');
previousButton.addEventListener('click', () => {
  carousel.previousPhoto();
});

const nextButton = document.querySelector('#nextButton');
nextButton.addEventListener('click', () => {
  carousel.nextPhoto();
});
