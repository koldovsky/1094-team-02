let currentSlide = 1;

function showSlide() {
    const slides = document.querySelectorAll('.slide');
    const sliderContainer = document.querySelector('.our-background-partners-logos');
    if (!slides.length || !sliderContainer) return;
    
    const offset = -currentSlide * (slides[0].offsetWidth + 30);
    sliderContainer.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide();
}

document.querySelector('.slider-arrow.left').addEventListener('click', prevSlide);
document.querySelector('.slider-arrow.right').addEventListener('click', nextSlide);
