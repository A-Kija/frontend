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

    x.addEventListener('click', (e) => {
        // e.stopPropagation();
        contacts.style = null;
    });  