function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// A.
// Sugeneruot 21 atsitiktini skaiciu nuo 10 iki 99 ir sulipinti i viena stringa.
// Skaicius atskirti kableliais. Po paskutinio skaiciaus kablelio nera.
// B. 
// Patobulinam. Generuoti tol kol ju suma bus ne didesne uz 250.
// C.
// Mazas Patobulinimas. Skaiciai mazesni nei 30
// turi buti surasyti i atskira eilute



// var i, bilekas = '';

// for (i = 1; i <= 21; i++) {

//     if (i !== 1) {
//         bilekas += ', ';
//     }
//     // bilekas += rand(10, 29);
//     bilekas = bilekas + rand(10, 29);

// }
// console.log(bilekas);


var sum = 0, answer = '', firstTime, digit;

firstTime = true;
do {
    if (!firstTime) {
        answer += ', ';
    }
    firstTime = false;
    digit = rand(10, 99);
    answer += digit;
    sum += digit;


} while(sum < 250);

console.log(answer);
console.log(sum - digit);

// while - 0 iki daug
// do while - 1 iki daug
// for - zinom kiek kartu is anksto


// var cycle1 = 1;
// while (cycle1 <= 5 ) {
//     console.log('cikle', cycle1);
//     cycle1++;
// }

// var counter = 0;
// var h = 0;
// var coin;
// do {
//     coin = rand(0, 1) ? 'H' : 'D';
//     if (coin == 'H') {
//         h++;
//     }
//     console.log('cikle', ++counter, h);
// } while (h < 3 );



// for (var cycle3 = 1; cycle3 <= 5; cycle3++) {
//     console.log('DIDELIS', cycle3);
//     for (var cycle4 = 1; cycle4 <= 5; cycle4++) {
//         console.log('mazas', cycle4);
//     }
// }
