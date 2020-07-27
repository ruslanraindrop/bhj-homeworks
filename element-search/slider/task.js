const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');
const images = Array.from(document.getElementsByClassName('slider__item'));
const dots = Array.from(document.getElementsByClassName('slider__dot'));
let current = 0;
dots[current].classList.add('slider__dot_active');

next.onclick = function() {
  if (current < (images.length - 1)) {
    current++;
  } else {
    images[current].classList.remove('slider__item_active');
    dots[current].classList.remove('slider__dot_active');
    current = 0;
    dots[current].classList.toggle('slider__dot_active');
  }

  images[current].classList.toggle('slider__item_active');
  images[current-1].classList.remove('slider__item_active');
  dots[current].classList.toggle('slider__dot_active');
  dots[current-1].classList.remove('slider__dot_active');
}

prev.onclick = function() {
  if (current === 0) {
    images[current].classList.remove('slider__item_active');
    dots[current].classList.remove('slider__dot_active');
    current = (images.length - 1);
    dots[current].classList.toggle('slider__dot_active');
  } else {
    current--;
  }

  images[current].classList.toggle('slider__item_active');
  images[current+1].classList.remove('slider__item_active');
  dots[current].classList.toggle('slider__dot_active');
  dots[current+1].classList.remove('slider__dot_active');
}


for (let i = 0; i < dots.length; i++) {
  dots[i].onclick = function() {
    images[current].classList.remove('slider__item_active');
    dots[current].classList.remove('slider__dot_active');
    images[i].classList.add('slider__item_active');
    dots[i].classList.add('slider__dot_active');
    current = i;
  }
}