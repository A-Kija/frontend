function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var komoda = ['obuolys', 'suo', 'kate', 'gyvate', 58, 'geles plastikines', 'zebras'];

var trysKintamieji = [rand(1, 10), rand(1, 10), rand(1, 10), komoda];

// var str = 'koja';

// str++;

// komoda[0] = 'kriause';
// komoda[1] = 'anakonda';
// komoda[2]++;

console.log(komoda[2]);

trysKintamieji[2] = 'nieko nera';

console.log('1', trysKintamieji[1]);

console.log('masyvas', komoda.slice());
// console.log('masyvas', trysKintamieji);

console.log('masyvo ilgis', komoda.length);

console.log('masyvo paskutinis', komoda[komoda.length - 1]);


// console.log(0, komoda[0]);
// console.log(1, komoda[1]);
// console.log(2, komoda[2]);
// console.log(3, komoda[3]);
// console.log(4, komoda[4]);
// console.log(5, komoda[5]);

// komoda[7] = 'pele';

komoda.push();
komoda.push('kumele', 'dramblys');// prideda i gala
komoda.unshift('padanga');// prideda i pradzia

var ka = komoda.unshift(581);

console.log(ka);
console.log(komoda.pop());
console.log(komoda.pop());


var b = komoda.indexOf('geles plastikines');

console.log('splice', komoda.splice(b, 1));


console.log('push', komoda.push('dinozauras'));

for (var index = 0; index < komoda.length; index++) {

    console.log(index, komoda[index]);

}

var trinti;
var copy;
var sk = [58, 45, 32, 47, 58, 32, 100, 147, 32];
copy = sk;
console.log('sk', sk.slice());


while((trinti = sk.indexOf(32)) >= 0) {
    sk.splice(trinti, 1);
}






