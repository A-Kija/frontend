const json = '[{"id":1,"title":"MAC"},{"id":2,"title":"Nike"},{"id":3,"title":"Victoria\u2019s Secret"},{"id":4,"title":"Zara"},{"id":5,"title":"Zizzi"},{"id":6,"title":"Witteveen"},{"id":7,"title":"H&M"},{"id":8,"title":"RIMOWA"},{"id":9,"title":"Adidas"},{"id":10,"title":"Paw Patrol"},{"id":11,"title":"Mattel"},{"id":12,"title":"Kenzo"},{"id":13,"title":"Asos"}]';

//A. Pagaminti Map tipo objektą, kuriame raktas yra id iš json'o stringo ir išvesti į konsolę


//B. Pagaminti mygtuką HTML'e, kurį paspaudus iš json'o stringo pasidarytų Set tipo objektas su
// reikšmėmis (kompanijų vardais) išrūšiuotais pagal abėcėlę ir išvesti setą į konsolę.



const map = new Map();

const arr = JSON.parse(json);

arr.forEach(obj => map.set(obj.id, obj.title));

// console.log(arr);
// console.log(JSON.parse(json).map(v => [v.id, v.title]));
// console.log(map);



const map1 = new Map(JSON.parse(json).map(v => [v.id, v.title]));

// console.log(map1);


const mp = arr.map(v => [v.id, v.title]);
const fe = arr.forEach(v => [v.id, v.title]);

console.log(mp, fe);

const s = new Set(['t','cat']);


console.log(s);

const map33 = new Map([ [...s], ['u','bird'], ['b','tiger'], ['a','dog'] ]);

console.log(map33);


//[ 0 => 'cat', 1 => 'dog', 2 => 'cat ] // Array

//[ 'cat' => 0, 'dog' => 1, -------- ] // Set

//[ 'one' => 'cat', 'two' => 'dog', 'ten' => 'cat ] // Map


console.log(new Set(arr.map(v => v.title).sort((a, b) => a > b ? -1 : 1)));




const SETAS = new Set();

// arr.slice().sort((a, b) => a.title > b.title ? 1 : -1).forEach(obj => SETAS.add(obj.title));


arr.forEach(obj => {
    SETAS.add(obj.title);
});
const tmpArr = [...SETAS];
tmpArr.sort();
SETAS.clear();
tmpArr.forEach(v => SETAS.add(v));





console.log(SETAS);

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//A. Reikia sukurti masyvą, kurio reikšmės yra atsitiktinės nuo 10 iki 20;
//Masyvo ilgis 25 elementai.

//B. Reikia sukurti masyvą, kurio reikšmės yra atsitiktinės nuo 10 iki 20;
//Masyvo ilgis nustatomas pagal masyvo reikšmes. Generuoti masyva tol, kol jame atsiras 3 reikšmės lygios 13;

//C. Reikia sukurti Set objektą, kurio reikšmės yra atsitiktinės nuo 10 iki 20;
//Set'o dydis yra VISOS reikšmės nuo 10 iki 20;

//D. Reikia sukurti Map objektą, kurio reikšmės yra atsitiktinės nuo 10 iki 20, o raktai (indeksai) yra igi atsitiktinės reikšmės nuo 10 iki 20;
//Map'ą generuoti tol, kol jame bus 3 reikšmės lygios 13.

//E. Sukurt Set tipo objektą pagal C sąlygą, tik jo ilgis turi būti 10.
// Surasti, kokio skaitmens trūksta Set'e, palyginus su generuojama atsitiktinių reikšmių aibe.

//F. Taip, kaip D sąlygoje tik 3 vienodos reikšmės gali būti bet kokie skaičiai.



//A.
const a1 = [];
for (let i = 1; i <= 25; i++) {
    a1.push(rand(10, 20));
}

console.log('-----------------');
console.log('a1', a1);

//B.
const a2 = [];
let counter13 = 0;
do {
    const r = rand(10, 20);
    
    if (r === 13) {
        a2.push(r+'');
        counter13++;
    }
    else {
        a2.push(r);
    }

} while (counter13 < 3);

console.log('a2', a2);

// C.
const a3 = new Set();
do {
    a3.add(rand(10, 20));
} while (a3.size < 11);

console.log('a3', a3);


// let y = 100;
const a4 = new Map();
let counter14;
do {
    const r = rand(10, 20);
    if (r === 13) {
        a4.set(rand(10, 20), r+'');
    }
    else {
        a4.set(rand(10, 20), r);
    }
    counter14 = 0;
    a4.forEach(v => v == 13 ? counter14++ : counter14);

} while (counter14 < 3 );

console.log('a4', a4);



