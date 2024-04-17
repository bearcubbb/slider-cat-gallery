let currentSlide = 0;
const slides = document.querySelectorAll('.photos img');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i == index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
});

showSlide(currentSlide);

/*let image1 = document.getElementById('img1');
let image2 = document.getElementById('img2');*/

/* let photo = document.querySelectorAll('#gallery .photos img'); 
let prev = document.querySelector('.prev'); 
let next = document.querySelector('.next'); 
 
let i = 0; 
 
prev.onclick = function () { 
    photo[i].style.display = 'none'; 
    i--; 
    if (i < 0) { 
        i = photo.length - 1; 
    } 
 
    photo[i].style.display = 'block'; 
} 
 
next.onclick = function () { 
    photo[i].style.display = 'none'; 
    i++; 
    if (i >= 0) { 
        i = 0; 
    } 
 
    photo[i].style.display = 'block'; 
} */
