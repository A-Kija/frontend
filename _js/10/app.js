function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('-------------------------4---------------------');
const abcd = ['A', 'B', 'C', 'D'];
const masyvai = [ [], [], [] ];
const triraidis = [];
const uniValue = [];
const uniComb = [];

for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 20; i++) {
        masyvai[j].push(abcd[rand(0, 3)]);
    }
}

for (let i = 0; i < 20; i++) {
    triraidis.push(masyvai[0][i]+masyvai[1][i]+masyvai[2][i]);
}

top: for (let i = 0; i < triraidis.length; i++) {

    // Unikali
    if (uniComb.indexOf(triraidis[i]) === -1) {
        uniComb.push(triraidis[i]);
    }

    // Vienetine
    let now = triraidis[i];
    let counter = 0;
    for (let j = 0; j < triraidis.length; j++) {
        if (triraidis[j] === now) {
            counter++;
            if (counter > 1) {
                continue top
            }
        }
    }
    uniValue.push(now);
}

console.log(uniValue, uniComb, triraidis);

console.log('--------------------5---------------------');

const masyvai5 = [ [], [] ];
let count = 0;

for (let j = 0; j < 2; j++) {
    do {
        count++;
        let random = rand(100, 210);
        if (masyvai5[j].indexOf(random) === -1) {
            masyvai5[j].push(random);
        }
    } while(masyvai5[j].length < 100);
}

console.log(masyvai5, count);

console.log('--------------------67---------------------');

const m6 = [];
const m7 = [];

for (let i = 0; i < masyvai5[0].length; i++) {
    if (masyvai5[1].indexOf(masyvai5[0][i]) === -1) {
        m6.push(masyvai5[0][i]);
    }
    else {
        m7.push(masyvai5[0][i]);
    }
}

console.log(m6, m7);

console.log('--------------------8---------------------');

const funny = [];

// for (let i = 0; i < masyvai5[0].length; i++) {
//     funny[masyvai5[0][i]] = masyvai5[1][i];
// }


masyvai5[0].forEach((val, ind) => {
    funny[val] = masyvai5[1][ind];
})



console.log(funny);

console.log('--------------------9---------------------');

const fm = [];

fm.push(rand(5, 25), rand(5, 25));

for (let j = 2; j < 10; j++) {
    let sum = fm[j-1] + fm[j-2];
    fm.push(sum);
}
console.log(fm);

console.log('-------------------OBJ---------------------');

const obj = {forest: 'Gump', digit2: 555, arr: [5,8,9]};

obj.color = 'Black';
obj.what = 'Cat';
obj.digit = 888;
obj.abc = {a: 'A', b: 'B', c: 'C'};
 
console.log(obj);

console.log('color', obj.color);

console.log('B:', obj.abc.b);

console.log('nera', obj.zz);

let obj2 = obj;


let A = 5;
let B = 12;
A = B; // 5 <---- 12
B = 45; // 45

let T;
let C = {A: 5};
let D = {B: 12};
D = C;  // dabar D rodys i C
T = D;  // dabar T rodys i C

D.A = 123;
console.log('C:', C, 'D:', D, 'T:', T);
console.log('A:', A, 'B:', B);


obj.f2 = 'feDu';
obj.f1 = 'feVienas';
obj.f3 = 'feTrys';

const prop = 'f' + rand(1, 3);

console.log(obj[prop]);

console.log('-------------------OBJ---------------------');

let zz = [2, 3];

zz.forEach( (j, i) => console.log(j, i));

for (let i in obj) {

    console.log(i, obj[i]);

}



