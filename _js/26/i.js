const text = 'Bla Bla Bla'; // tekstas js faile
const where = document.querySelector('div');

const textN = document.createTextNode(text); // DOM dalis
const element = document.createElement('h1'); // DOM dalis
element.appendChild(textN);
where.appendChild(element);


console.log(text);
console.log(typeof text);
console.log('----------------------');
console.log(textN);
console.log(typeof textN);
console.log('----------------------');
console.log(element);
console.log(typeof element);


const button = document.querySelector('button'); // pagal tago varda
const iA = document.querySelector('[name=A]'); // pagal name
const iB = document.querySelector('#B'); // pagal id

let t1 = '';
let t2 = '';


button.addEventListener('click', () => {
    // vieta rasyti kodui, kuris nutiks paspaudus mygtuka
    const text1 = iA.value;
    const text2 = iB.value;

    // 1.
    if(t1 !== text1) {
        t1 = text1;
        console.log(text1);
    }
    

    //2.
    if(t2 !== text2) {
        t2 = text2;
        const text2N = document.createTextNode(text2); // DOM dalis
        const element2 = document.createElement('h1'); // DOM dalis
        element2.appendChild(text2N);
        where.appendChild(element2);
    }
    //vietos pabaiga
});