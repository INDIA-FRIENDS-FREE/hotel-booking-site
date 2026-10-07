// 1. ऑटोमैटिक बैकग्राउंड गैलरी लॉजिक
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// हर 4 सेकंड में इमेज बदलती रहेगी (Looping)
setInterval(nextSlide, 4000);

console.log("Hotel Booking Site Scripts loaded successfully. Lightweight & Optimized.");
