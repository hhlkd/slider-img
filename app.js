let currentIdex = 0;
const slide = document.querySelectorAll('.slide');
const TotalSlide = slide.length;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dot1 = document.querySelector('.dot1');
const dot2 = document.querySelector('.dot2');
const dot3 = document.querySelector('.dot3');
const dot4 = document.querySelector('.dot4');
//when user click on prev button go to previous slide 

function changeSlide(n){
    currentIdex += n;

    if(currentIdex < 0){
        currentIdex = TotalSlide - 1;
    }
    else if(currentIdex > TotalSlide){
        currentIdex = 0;
    }
    updateSlider();
}
function updateSlider(){
    const translateValue = -currentIdex * 100 + '%';
    document.querySelector('.slider').style.transform = 'translateX(' + translateValue + ')';
}

prev.addEventListener('click', () => {
    changeSlide(-1);
});

next.addEventListener('click', () => {
    changeSlide(1);
});

//when user click on dot, go to that slide

dot1.addEventListener('click', () => {
    changeSlide(-1);
});

dot2.addEventListener('click', () => {
    changeSlide(1);
});

dot3.addEventListener('click', () => {
    changeSlide(2);
});

dot4.addEventListener('click', () => {
    changeSlide(3);
});

//Autoplay the slider change every 3 seconds
setInterval(() =>{
    changeSlide(1);
}, 3000);