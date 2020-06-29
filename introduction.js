const slideContainer = document.getElementsByClassName('slide__container'),
    slideWap = document.getElementsByClassName('slide__wrap'),
    slides = document.getElementsByClassName('slide'),
    slideCount = slides.length,
    slide__prevBtn = document.getElementById('prev'),
    slide__nextBtn = document.getElementById('next');
let topHeigth = 0;
let currentIdx = 0;

topHeigth = slides.offsetHeight;



function calculateTallestSlide() {

    for (let i = 0; i < slideCount; i++) {
        if (slides[i].offsetHeight > topHeigth) {
            topHeigth = slides[i].offsetHeight;
        }
    }
    slideContainer[0].style.height = topHeigth + 'px';
    slideWap[0].style.height = topHeigth + 'px';
}

calculateTallestSlide();


for (let i = 0; i < slideCount; i++) {
    slides[i].style.left = i * 100 + '%'

}

function goToSlide(idx) {
    slideWap[0].style.left = idx * -100 + '%';
    slideWap[0].classList.add('animated');
    currentIdx = idx;

    // updateNav();
}
function updateNav() {
    if (currentIdx === 0) {
        slide__prevBtn.classList.add('disabled');
    } else {
        slide__prevBtn.classList.remove('disabled');
    }
    if (currentIdx === slideCount - 1) {
        slide__nextBtn.classList.add('disabled');
    } else {
        slide__nextBtn.classList.remove('disabled');
    }
}



slide__prevBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (currentIdx > 0) {
        goToSlide(currentIdx - 1);
    } else {
        goToSlide(slideCount - 1);
    }
});


slide__nextBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (currentIdx < slideCount - 1) {
        goToSlide(currentIdx + 1);
    } else {
        goToSlide(0);
    }

});

goToSlide(0);

