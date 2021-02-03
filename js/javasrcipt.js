let slideIndex = 1;

let slides = document.querySelectorAll(".slides");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let time;

showSlides(slideIndex);

prev.addEventListener("click", () => { calculateSlide(-1); });
next.addEventListener("click", () => { calculateSlide(1); });

function calculateSlide(n) {
    slideIndex = slideIndex + n;
    showSlides(slideIndex);
}



function showSlides(n) {
    reset(time)

    if(n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }
  
    slides[slideIndex - 1].style.display = "flex";
    time = setTimeout(() => {calculateSlide(1)}, 10000);
}

function reset(time) {
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }   
    if(time) {
        clearTimeout(time);
    }
}