
var carousel = document.getElementById('carousel');
var container = document.querySelector('.container');
var prev_arrow = document.querySelector('.handler_left');
var next_arrow = document.querySelector('.handler_right');
var PANNEL_WIDTH = 400; //패널 넓이 고정 
var PANNEL_COUNT = container.querySelectorAll('.panel').length; //
var currIndex = 0;

//캐러셀 기본구조 << 검색 
prev_arrow.addEventListener('click', function () {
    if (currIndex === 0) currIndex = 5;
    container.style.transform = `translate(-${(currIndex - 1) * PANNEL_WIDTH}px)`
    currIndex--;
});

next_arrow.addEventListener('click', function () {
    if (currIndex === 4) currIndex = -1;
    container.style.transform = `translate(-${(currIndex + 1) * PANNEL_WIDTH}px)`
    currIndex++;
});

