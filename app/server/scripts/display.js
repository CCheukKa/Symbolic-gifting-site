const buttonAnimate = document.getElementById('buttonAnimate');
const svgPulse = document.getElementById('svgPulse');
const path = document.getElementById('path');

// const pathLength = path.getTotalLength();
// console.log(pathLength);
// path.style.strokeDasharray = pathLength + 10000;
// path.style.strokeDashoffset = pathLength + 10000;

buttonAnimate.addEventListener('click', e => {
    console.log('clicked');
    path.classList.add('animate');
});