// hover dropdown menu

const toppings = document.querySelector('h1');
const menu = document.querySelector('ul')
toppings.addEventListener('mouseover', show)
function show() {
    menu.classList.add('dropDown')
}

// image slider
const leftArrow = document.querySelector('#leftSlide')
const rightArrow = document.querySelector('#rightSlide')
const arrows = document.querySelectorAll('.slideArrows')

for (const button of arrows){addEventListener('click', shiftLeft)}

let initial = 0
function shiftLeft(e){
    
    const imageFrame = document.querySelector('.images')
    if (e.target.id == 'leftSlide'){
    imageFrame.style.left = initial - 200;
    initial -= 200;}
    else if (e.target.id == 'rightSlide'){
        imageFrame.style.left = initial + 200;
    initial += 200;
    }
    // imageFrame.classList.toggle('shift')
// let framePos = parseInt(getComputedStyle(slideImage).left)
// slideImage.style.left = framePos - 200;

}
