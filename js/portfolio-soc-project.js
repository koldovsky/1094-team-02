const slides = [
  '<div><img src="img/mountain.webp"</div>',
  '<div><img src="img/portfolio_photo_left.jpg"</div>',
  '<div><img src="img/portfolio_photo_right_bottom.jpg"</div>',
  '<div><img src="img/portfolio_photo_right_top.jpg"</div>',
];

let currentSlideIdx = 0;

function renderSlide(){
  const slideContainer = document.querySelector('.carousel');
  slideContainer.innerHTML = slides[currentSlideIdx];
}

function nextSlide(){
  currentSlideIdx++;
  if (currentSlideIdx >= slides.length) {
    currentSlideIdx = 0;
  }

  renderSlide();
}

function prevSlide(){
  currentSlideIdx--;
  if (currentSlideIdx <= slides.length) {
    currentSlideIdx = 0;
  }

  renderSlide();
}

renderSlide();
setInterval(nextSlide, 3000);

const nextBtn = document.querySelector('.carousel_btn-next');
console.log(nextBtn);
nextBtn.addEventListener('click', nextSlide);

const prevBtn = document.querySelector('.carousel_btn-prev');
console.log(prevBtn);
prevBtn.addEventListener('click', prevSlide);



