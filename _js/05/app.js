function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('-------------------1----------------------');
var a = 7, b = 8, c = 20;
var suma = a + b + c;
console.log('1A:', suma);

var string = String(a) + String(b) + String(c); // skaicius virsta strigu
var string2 = '' + a + b + c; // skaicius virsta strigu
console.log('1B:', string, string2);

var string3 = a + ' ' + b + ' ' + c; // skaicius virsta strigu
console.log('1C:', string3);

var string4 = a + ' ' + b + ' ' + c + ' ' + suma;

console.log('1D:', string4);

console.log('-------------------2----------------------');

var rand1 = rand(5, 10);
console.log('2:', rand1);

console.log('-------------------3----------------------');
var hello = 'labas', i;

for (i = 0; i < 5; i++) {
    console.log('3:', hello);
}

console.log('-------------------4----------------------');

for (i = 0; i < 7; i++) {
    console.log('4:', rand1);
}

console.log('-------------------5----------------------');

for (i = 0; i < rand1; i++) {
    console.log('5:', rand1);
}


console.log('-------------------6----------------------');
if (rand1 > 7) {
    for (i = 0; i < rand1; i++) {
        console.log('5:', rand1);
    }
}



console.log('-------------------7-----------------------');
var rand2;

for (i = 0; i < 5; i++) {
    rand2 = rand(10, 20);
    console.log('7A:', rand2);
}

var ranka;
var kibiras = 0;

for (i = 0; i < 5; i++) {
    ranka = rand(10, 20);
    kibiras = kibiras + ranka;
}

console.log('7B:', kibiras);



var kibiras2 = '';

for (i = 0; i < 5; i++) {
    ranka = rand(10, 20);
    kibiras2 = kibiras2 + ranka + ' ';
}

console.log('7C:', kibiras2);


var kibiras3 = '';
var suma3 = 0;

for (i = 0; i < 5; i++) {
    ranka = rand(10, 20);
    suma3 = suma3 + ranka;
    kibiras3 = kibiras3 + ranka + '*';
}

kibiras3 = kibiras3 + suma3;
console.log('7D:', kibiras3);


console.log('-------------------8-----------------------');
var rand28;

do {
    rand28 = rand(10, 20);
    console.log('8A:', rand28);
}while(rand28 >= 12);

console.log('------------------------------------------');
suma28 = 0;
do {
    rand28 = rand(10, 20);
    console.log('8B:', rand28);
    suma28++;
}while(rand28 >= 12);

console.log('8B', 'suma', suma28);


console.log('------------------------------------------');
suma38 = 0;
do {
    rand28 = rand(10, 20);
    console.log('8C:', rand28);
    if (rand28 <= 18) {
        suma38 += rand28;
    }
} while(rand28 >= 12);

console.log('8C', 'suma', suma38);



console.log('------------------------------------------');
suma48 = 0;
count48 = 0;
do {
    rand28 = rand(10, 20);
    console.log('8D:', rand28);
    if (rand28 <= 18) {
        suma48 += rand28;
    }
    else {
        count48++;
        // count48 += 20;
        // count48 = count48 + 10;
    }
} while(rand28 >= 12);

console.log('8D', 'suma', suma48);
console.log('8D', 'atmesta', count48);


console.log('------------------------------------------');
lyginiai = 0;
lyginiaiNe = 0;
do {
    rand28 = rand(10, 20);
    console.log('8E:', rand28);

    if (rand28 % 2 === 0) {
        lyginiai++;
    }
    else {
        lyginiaiNe++;
    }

    // rand28 % 2 ? lyginiaiNe++ : lyginiai++;


} while(rand28 >= 12);

console.log('8E', 'lyginiai', lyginiai);
console.log('8E', 'nelyginiai', lyginiaiNe++);




console.log('------------------------------------------');
var countSmall;
var countBig = 0; // Pakartojimai
var countSmallAll = 0; // Bendras mazo ciklo iteraciju kiekis
do {
    console.log('------------didelio vidus viso:---------', countBig)
    countSmall = 0; 
    // mazas
    do {
        rand28 = rand(10, 20);
        countSmall++;
        countSmallAll++;
        console.log('mazo vidus viso:', countSmall)
    } while(rand28 >= 12);
    // mazas
    countBig++;


} while(countSmall < 15);

console.log('8F', 'BIG', countBig);
console.log('8F', 'ALL', countSmallAll);


console.log('-------------------9-----------------------');
var rand99;
var mazas9 = 0;
var didelis9 = 0;
var mi;
do {
    didelis9++;
    rand99 = rand(5, 10);
    console.log('9A:', rand99);
    for(mi = 0; mi < rand99; mi++) {
        mazas9++;
    }

}while(rand99 != 5);
console.log('9A:', 'mazas', mazas9);
console.log('9A:', 'didelis', didelis9);


console.log('-------------------------------------------');

var count5 = 0;
do {
    rand99 = rand(5, 10);
    if (rand99 === 5) {
        count5++;
    }
    console.log('9B:', rand99);
}while(count5 < 3);


console.log('-------------------------------------------');

count5 = 0;
do {
    rand99 = rand(5, 10);
    if (rand99 === 5) {
        count5++;
    }
    else {
        count5 = 0; 
    }
    console.log('9C:', rand99);
}while(count5 < 3);