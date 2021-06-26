const mobSize = 700;
let currentSize;
changeSize()

window.addEventListener('resize', () => {
    reportWindowSize();
    changeSize();
});

window.addEventListener('DOMContentLoaded', () => {
    heightOutput = document.querySelector('#height');
    widthOutput = document.querySelector('#width');
    reportWindowSize();
});

let heightOutput, widthOutput;
function reportWindowSize() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
}

function changeSize() {
    console.log('go');
    let change = currentSize;
    if (window.innerWidth > mobSize) {
        currentSize = 'desktop';
    }
    else {
        currentSize = 'mobile';
    }
    if (change !== currentSize) {
        console.log('Change layout to '+ currentSize);
    }
}



