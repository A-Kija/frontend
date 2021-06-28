const setas = new Set();

setas.add('grybas');
setas.add('aguras');
setas.add('pupelė (ankštinė)');


console.log(setas);



const hard = [
    new Set([2,8,7]),
    new Set([2,0,7,8,7]),
    new Set([2,8,0,7,1,9]),
    new Set([2,8,7,0])
];

console.log(hard);



// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
console.log(hard instanceof Array);
console.log(setas instanceof Set);
const easy = [
    [1,8],
    new Set([7, 9]),
    new Set(),
    [1,8,7],
    new Set([7, 9, 11]),
    [],
    new Set([7, 9, 71, 11, 45]),
];

//1 
const tmp = [...setas].sort();
setas.clear();
tmp.forEach(v => setas.add(v));
console.log(setas);

//2
let tmp2 = [...setas]; // setas pavirsta masyvu
tmp2 = JSON.stringify(tmp2); // masyvas paverciams JSON strigu
localStorage.setItem('manoSetas', tmp2); // JSON strigas irasomas
let tmp3 = localStorage.getItem('manoSetas'); // JSON striga is storage
tmp3 = JSON.parse(tmp3); // JSON stringas atvirsta i masyva
const setasBack = new Set(tmp3); // pagal atvirtusi masyva sukuriame nauja seta
console.log('setasBack:', setasBack);

//3
hard.sort((a, b) => b.size - a.size);
console.log(hard);

//4.
// easy.sort((a, b) => b instanceof Array ? 1 : 0);

easy.sort((a, b) => {
    if (b instanceof Array === a instanceof Array ||
        b instanceof Set === a instanceof Set) {
            return 0;
        }
    else if (b instanceof Array) {
        return 1;
    }
    else if (b instanceof Set) {
        return -1;
    }
})

const filterEasy = easy.filter(v => v instanceof Set ? 1 : 0);
console.log(filterEasy);


console.log('_-_-_-_-_-_-_-_-');

const map = new Map();

map.set('Petras', 'kas guli Petro stalčiuje');
map.set('Šarikas', 'kas guli Šariko būdoje');
map.set('Janotas', 'ką šiukšlių dėžėjė rado Janotas');

console.log('has Janotas:', map.has('Janotas'));
console.log('get Šarikas:', map.get('Šarikas'));


for (const val of map) {
    console.log('valas', val[0]);
}

const mapArray = [...map];

console.log(mapArray);


const kitasMapas = new Map([['a',2], ['b',2], ['c',2]]);

console.log(map);
console.log(kitasMapas);


const tmp11 = [...map].sort((a, b) => a[0][3] < b[0][3] ? -1 : 0);
map.clear();
tmp11.forEach(v => map.set(v[0], v[1]));
console.log(map);


const notSoEasy = [
    [1,8],
    new Set([7, 9]),
    new Set(),
    new Map([['a',2], ['b',2], ['c',2]]),
    [1,8,7],
    new Set([7, 9, 11]),
    [],
    new Set([7, 9, 71, 11, 45]),
    new Map([['a',2], ['c',2]]),
];