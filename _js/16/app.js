function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let timerId = setInterval(() => {
const c = document.querySelector('.container');

const divs = c.querySelectorAll('div');
const randBackgroundColor = () => 'rgb( '+ rand(0,255) +',' + rand(0,255) +',' + rand(0,255) + ')';
const randBackgroundColorGray = () => {
    const c = rand(0,255);
    return 'rgb( '+ c +',' + c +',' + c + ')';
}

divs.forEach((div, i) => {
    if (i % 2) {
        div.style.height = '100px';
        div.style.width = '100px';
        div.style.backgroundColor = randBackgroundColor();
    }
    else {
        div.classList.add('abc');
    }
})


}, 2000);


