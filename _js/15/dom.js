function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




const h1 = document.querySelector('h1');

h1.classList.remove('abc');
h1.classList.add('bbc');


console.log(h1.classList.contains('bbc'));



const colors = ['green', 'yellow', 'blue', 'red'];
const cla = ['one', 'two', 'three'];
const ul = document.querySelectorAll('ul');
ul.forEach((lis, i) => {
    lis.querySelectorAll('li').forEach((li, b) => {
        li.style.fontSize = rand(10, 30) + 'px';
        li.style.color = colors[i%4];
        li.classList.add(cla[b%3]);
    })
});


// const li = ul.querySelectorAll('li');


// li.forEach(e => e.style.fontSize = rand(10, 30) + 'px');


// h1.style.color = 'green';

// setTimeout(() => h1.style.color = 'green', 2000);