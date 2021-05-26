function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var kin1 = rand(0, 25);
var kin2 = rand(0, 25);
var kin3 = rand(0, 25);
// console.log(kin1, kin2, kin3);

var animal;

if (rand(0, 2)) {
    animal = 'Dramblys';
}
else {
    if (rand(0, 1)) {
        animal = 'Krokodilas';
    }
    else {
        animal = 'Asilas';
    }
}

console.log(animal);

var animal2 = rand(0, 2) === 0 ? 'Dramblys' : (rand(0, 1) === 0 ? 'Krokodilas' : 'Asilas');

console.log(animal2);

var bird = 'varna';

// var now = (typeof bird === 'undefined') ? 'zylute' : bird;

var now = bird ?? 'zylute';

console.log('now', now);


// ARBA ||
// IR &&

console.log('true || true', true || true);
console.log('false || true', false || true);
console.log('true || false', true || false);
console.log('false || false', false || false);

console.log(2 > 5 || 7 < 5 && 7 < 15);

console.log('true && true', true && true);
console.log('false && true', false && true);
console.log('true && false', true && false);
console.log('false && false', false && false);


var a1 = null;
var a2 = '';
var a3 = 0;


var end = a1 || a2 || a3;
var end2 = a1 && a2 && a3;

var end3 = a1 ?? a2 ?? a3;


console.log(end);
console.log(end2);
console.log(end3);


var zz = 7;
var bb = 3;


var count = zz && 100 * bb || 5; 


console.log(count);


