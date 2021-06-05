
let F = 'FFF';

// Funkcijos viduje esantys kintamieji yra nematomi uz funkcijos ribu. (ne => funkcijom)
function say(what = 'tyla', kitas = 0) {

    console.log(what);
    // console.log(F);

    var F2 = 'F2F2F2';

    return F2;
}

let F2 = say();

// console.log(F2);

// say('labas');
// say('ate');
// say();


// 1. Deklaracija nevykdoma

function duokObuoli() {
    let vienaVieninteli = 'Imk obuoli';
    return vienaVieninteli;
}

// function duokUoga() {
//     return 'Imk uoga';
// }


let duokUoga = function(what = 'braske') {
    return 'Imk uoga '+ what;
}

// 2. Iskvietimas

let manoObolis = duokObuoli();
let uogele = duokUoga();

const uogos = {};

uogos.duok = duokUoga;


uogos.o = duokObuoli;

const g = duokObuoli;


uogos.duok();


console.log(  uogos.duok('zemuoge'), uogos.o()  );


// console.log(uogos.o === g);


function changeArray(array) {
    let tmp = array[0];     // 0 : 0, tmp // tmp
    array[0] = array[1];    // 1 : 0, 1
    array[1] = tmp;         // 1 : 0 // 0 : 1
    return array;
}


// 
let m = [{a:'A'}, {a:'B'}];
console.log('before m:', m);

let m1 = changeArray(m);

console.log('after m1:', m1);

m1.push('C');


// CALC
const sum = function(a, b) {
    return a + b;
}
const dif = function(a, b) {
    return a - b;
}

const multi = function(a, b) {
    return a * b;
}


function calculator(action, z, x) {
    return action(z, x);
}

let c = 10;
let d = 12;

console.log('+',calculator(sum, c, d));
console.log('-',calculator(dif, c, d));
console.log('-',calculator(multi, c, d));

// console.log(m);



