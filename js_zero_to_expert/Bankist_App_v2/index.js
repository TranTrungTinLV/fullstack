'use strict'
const closeModal = document.querySelector('.btn--close-modal');
const Modal = document.querySelector('.modal');
const btnOpenModal = document.querySelectorAll('.btn--show-modal');
const Overlay = document.querySelector('.overlay');
const btnScroll = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const btnNav = document.querySelectorAll('.nav__link');
const Modal_close = (e) => {

    Modal.classList.add('hidden');
    Overlay.classList.add('hidden');
}

closeModal.addEventListener('click', Modal_close)
const openModal = (e) => {
    e.preventDefault();
    Modal.classList.remove('hidden');
    Overlay.classList.remove('hidden')
}

for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', openModal)
}

document.addEventListener('keydown', (e) => {
    makeKey(e.key);
});

function makeKey(key) {
    switch (key) {
        case 'Escape':
            Modal_close();
            break;
        default:
            break;
    }
}


btnScroll.addEventListener('click', () => {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords)
    //Scrolling
    window.scrollTo({
        left: s1coords.left + window.pageXOffset,
        top: s1coords.top + window.pageYOffset,
        behavior: 'smooth'
    });
})

btnNav.forEach(
    function (el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            const id = this.getAttribute('href');
            console.log(id);
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth'
            });
        })
    }
)



//EVent listener

const alertH1 = () => {
    alert('hello');
    document.querySelector('h1').removeEventListener('mouseenter', alertH1)

}
document.querySelector('h1').addEventListener('mouseenter', alertH1)


//Slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
let curSlide = 0;
const maxSlides = slides.length;
// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.2) translateX(-800px)';
// slider.style.overflow = 'visible';

slides.forEach(
    (s, i) => (
        s.style.transform = `translateX(${100*i}%)`
    )
)

const goToSlide = (slide) => (
    slides.forEach(
        (s, i) => {
            s.style.transform = `translateX(${100*(i-slide)}%)`
        }
    )
)

goToSlide(0);

//Next Slide
const nextSlide = function () {
    if (curSlide === maxSlides -1) {
        curSlide = 0
    } else {
        curSlide++;
    }
    goToSlide(curSlide)
}

const prevSlide = function () {
    if (curSlide === 0) {
        curSlide = maxSlides - 1
    } else {
        curSlide--;
    }
    goToSlide(curSlide)
}
btnRight.addEventListener('click', nextSlide)

btnLeft.addEventListener('click', prevSlide)