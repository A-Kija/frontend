const linkas = document.querySelector('a');

const cvLink = 'https://www.cv.lt/';
const vzLink = 'https://www.vz.lt/';

console.log(linkas.getAttribute('href'));
linkas.setAttribute('title', 'Go go go');
linkas.removeAttribute('href');

document.querySelector('#cv').addEventListener('click',() => linkas.setAttribute('href', cvLink));

document.querySelector('#vz').addEventListener('click', () => linkas.setAttribute('href', vzLink));


const img = document.querySelector('.i1');
const img2 = document.querySelector('.i2');

// document.querySelector('#t1').addEventListener('click', () => img.setAttribute('src', img.dataset.t1));
// document.querySelector('#t2').addEventListener('click', () => img.setAttribute('src', img.dataset.t2));
// document.querySelector('#t3').addEventListener('click', () => img.setAttribute('src', img.dataset.t3));

document.querySelector('.buttons1').querySelectorAll('button').forEach(b => {
    b.addEventListener('click', () => {
        img.setAttribute('src', img.dataset[b.id]);
    })
})


document.querySelector('.buttons2').querySelectorAll('button').forEach(b => {
    b.addEventListener('click', () => {
        img2.setAttribute('src', b.dataset.img);
    })
})


const labas = document.querySelector('[name=labas]');
const selis = document.querySelector('[name=selis]');
const selis2 = document.querySelector('[name=selis2]');

labas.addEventListener('input', () => {
    console.log(labas.value);
})

selis.addEventListener('input', (s) => {
    console.log(selis.value);
    img.setAttribute('src', img.dataset[s.target.value]);
})

selis2.addEventListener('input', (s) => {
    img.setAttribute('src', s.target.value);
})


const h1 = document.querySelector('h1');
const h1Input = document.querySelector('[name=h1]');
const h1Do = document.querySelector('#h1');
const h2Do = document.querySelector('#h2');

const html = '<h2>Labas Vakaras</h2>';

h1Do.addEventListener('click', () => {
    const valueText = h1Input.value;
    h1.innerText = valueText;
})

h2Do.addEventListener('click', () => {
    h1.innerHTML = html;
})


