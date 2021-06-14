const allListOfAnimals = {}


// {plesrunai: 1, zirafos: 2}

// ul ciklas
// allListOfAnimals[ul.id] = 0;
// ul -> li ciklas
// count++
// ul -> li ciklo pabaiga
// allListOfAnimals[ul.id] = count;
// ul ciklo pabaiga



const contacts = document.querySelector('#contacts');
const x = contacts.querySelector('b');
const did = contacts.querySelector('u');

contacts.addEventListener('click', e => e.target.style.color = 'red');

did.addEventListener('click', e => {
    e.stopPropagation();
    contacts.style.fontSize = '20px';
    });

x.addEventListener('click', e => {
    e.stopPropagation();
    contacts.style = null;
});  


// 4A
// const dbAnimal = function(e) {
//     e.target.style.color = 'red';
// }

// const newAnimals = document.querySelectorAll('.new');

// for (let i = 0; i < newAnimals.length; i++) {
//     newAnimals[i].addEventListener('dblclick', dbAnimal);
// }


document.querySelectorAll('.new').forEach(animal => {
    animal.addEventListener('dblclick', e => {
        e.target.style.color = 'red';
    })
})

let counter = 0;
document.querySelectorAll('h2').forEach( () => counter++ );
document.querySelectorAll('h2').forEach( () => {
    counter++
});


let count1 = 0;

document.querySelector('.animals').querySelectorAll('li').forEach( li => {
    if (li.classList.contains('new')) {
        count1++;
    }
});

console.log(count1);
// 2i

const newAnimalsList = {};

document.querySelectorAll('ul').forEach( ul => {
    let count = 0;
    ul.querySelectorAll('li').forEach( li => {
        if (li.classList.contains('new')) {
            count++;
        }
    });
    newAnimalsList[ul.id] = count;
});


const uls = document.querySelectorAll('ul');
for (let i = 0; i < uls.length; i++) {
    let count = 0;
    const lis = uls[i].querySelectorAll('li');
    for (let j = 0; j < lis.length; j++) {
        if (lis[j].classList.contains('new')) {
            count++;
        }
    }
    newAnimalsList[uls[i].id] = count;
}


console.log(newAnimalsList);