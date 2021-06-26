let scrollOutput, menu;
const fromTop = 30;
let currentSize;


window.addEventListener('scroll', () => {
    reportWindowScroll();
});

window.addEventListener('DOMContentLoaded', () => {
    scrollOutput = document.querySelector('#scroll');
    menu = document.querySelector('#menu');
    changeSize();
    reportWindowScroll();
});


function reportWindowScroll() {
    console.log('go');
    scrollOutput.textContent = window.scrollY;
    changeSize();
}

function changeSize() {
    let change = currentSize;
    if (window.scrollY > fromTop) {
        currentSize = 'small';
    }
    else {
        currentSize = 'full';
    }
    if (change !== currentSize) {
        if(currentSize === 'small') {
            menu.style.height = '20px';
        }
        else {
            menu.style.height = '30px';
        }
        console.log('Change menu to '+ currentSize);
    }
}





