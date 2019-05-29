const track = document.querySelector('.carouseltrack');
const slides = Array.from(track.children);
const prevbutton = document.querySelector('.buttonleft');
const nextbutton = document.querySelector('.buttonright');

const slideWitdh = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWitdh * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('currentslide');
    targetSlide.classList.add('currentslide');
}

prevbutton.addEventListener('click', event => {
    const currentSlide = track.querySelector('.currentslide');
    const prevSlide = currentSlide.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    hideShowArows(slides, prevbutton, nextbutton, prevIndex);
});

nextbutton.addEventListener('click', event => {
    const currentSlide = track.querySelector('.currentslide');
    const nextSlide = currentSlide.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    hideShowArows(slides, prevbutton, nextbutton, nextIndex);

});

document.addEventListener('keydown', event => {
    const key = event.keyCode;

    if (key == 39) {
        const currentSlide = track.querySelector('.currentslide');
        const nextSlide = currentSlide.nextElementSibling;
        const nextIndex = slides.findIndex(slide => slide === nextSlide);
        moveToSlide(track, currentSlide, nextSlide);
        hideShowArows(slides, prevbutton, nextbutton, nextIndex);
    }
    if (key == 37) {
        const currentSlide = track.querySelector('.currentslide');
        const prevSlide = currentSlide.previousElementSibling;
        const prevIndex = slides.findIndex(slide => slide === prevSlide);

        moveToSlide(track, currentSlide, prevSlide);
        hideShowArows(slides, prevbutton, nextbutton, prevIndex);
    }
});

const hideShowArows = (slides, prevbutton, nextbutton, targetIndex) => {
    if (targetIndex === 0) {
        prevbutton.classList.add('is-hidden');
        nextbutton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevbutton.classList.remove('is-hidden');
        nextbutton.classList.add('is-hidden');
    } else {
        prevbutton.classList.remove('is-hidden');
        nextbutton.classList.remove('is-hidden');
    }
    console.log(slides.length);
}



//https://www.youtube.com/watch?v=gBzsE0oieio
