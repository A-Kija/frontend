
// ---------------------A
const aTag = document.querySelector('a');
const h1Tag = document.querySelector('h1');

aTag.style.color = 'green';
h1Tag.style.color = 'red';

// ---------------------B

const makeH1TagBlue = function(eventas) {
    eventas.preventDefault();
    h1Tag.style.color = 'blue';
}

aTag.addEventListener('click', makeH1TagBlue);


// ---------------------C

const divs = document.querySelectorAll('div');

const hideDiv = function(e) {
    e.target.style.display = 'none';
}

const deleteDiv = function(e) {
    e.target.remove();
}

for (let i = 0; i < divs.length; i++) {
    // divs[i].addEventListener('click', hideDiv);
    divs[i].addEventListener('click', deleteDiv);
}

const dukraSpan = document.querySelector('i span');

const killFamily = function(e) {
    e.target.closest('i').remove();
}

dukraSpan.addEventListener('click', killFamily);


const newDukra = document.createElement('span');

const nameOfDukra = document.createTextNode('Dukra 2');

newDukra.appendChild(nameOfDukra);

const tevas = document.querySelector('i');

tevas.appendChild(newDukra);



const h2Tags = document.querySelectorAll('h2');

for (let i = 0; i < h2Tags.length; i++) {
    const sp = document.createElement('span');
    const nr = document.createTextNode(i+1);
    sp.appendChild(nr);
    h2Tags[i].appendChild(sp);
}










