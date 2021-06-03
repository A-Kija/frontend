function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let masyvas = [];

for (let i = 0; i < 30; i++) {
    masyvas.push(rand(5, 25));
}

console.log('start', masyvas.slice());

console.log('----------------------A---------------------');
let did10 = 0;
for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] > 10) {
        did10++;
    }
}
console.log('did10', did10);

console.log('----------------------B---------------------');
let did = 5;
let didIndex = [];
for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] > did) {
        did = masyvas[i];
        didIndex = []; // isvalymas
    }
    if (masyvas[i] === did) {
        didIndex.push(i);
    }
}
console.log('did, didIndex', did, didIndex);


console.log('----------------------C---------------------');
let indexSuma = 0;
let indexNSuma = 0;
for (let i = 0; i < masyvas.length; i++) {
    if (i % 2 === 0) {
        indexSuma += masyvas[i]; // poriniai
    }
    else {
        indexNSuma += masyvas[i]; // neporiniai. nereikalauti salygoj
    }
}
console.log('indexSuma', indexSuma, indexNSuma);


console.log('----------------------D---------------------');
const naujasMasyvas = [];
for (let i = 0; i < masyvas.length; i++) {
    naujasMasyvas.push(masyvas[i] - i);
}
console.log('naujasMasyvas', naujasMasyvas);


console.log('----------------------E---------------------');
for (let i = 0; i < 10; i++) {
    masyvas.push(rand(5, 25));
}
console.log('masyvas', masyvas.slice());

console.log('----------------------F---------------------');
const porMas = [];
const neporMas = [];
for (let i = 0; i < masyvas.length; i++) {
    if (i % 2 === 0) {
        porMas.push(masyvas[i]); // poriniai
    }
    else {
        neporMas.push(masyvas[i]); // neporiniai. nereikalauti salygoj
    }
}
console.log('porMas, neporMas', porMas, neporMas);

console.log('----------------------G---------------------');
for (let i = 0; i < masyvas.length; i += 2) {
    if (masyvas[i] > 15) {
        masyvas[i] = 0;
    }
}
console.log('masyvas', masyvas.slice());


console.log('----------------------H---------------------');

let index1 = -1;
let ii = 0; 
do {
    if (masyvas[ii] > 24) {
        index1 = ii;
    }
    ii++;
} while(index1 === -1 && ii < masyvas.length);

console.log('index1', index1);


console.log('----------------------I---------------------');
for (let i = 0; i < masyvas.length; i++) {
    masyvas.splice(i, 1);
}
console.log('masyvas', masyvas.slice());


console.log('----------------------3---------------------');
const abcd = ['A', 'B', 'C', 'D'];
const counter = [0, 0, 0, 0];
const masyvas3 = [];

for (let i = 0; i < 200; i++) {
    masyvas3.push(abcd[rand(0, 3)]);
}

console.log('masyvas3', masyvas3.slice());

for (let i = 0; i < masyvas3.length; i++) {
    let index = abcd.indexOf(masyvas3[i]);
    counter[index]++;
}

console.log('counter', counter);

