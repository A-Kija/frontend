function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// for (var i = 0; i < 5; i++) {


//     if (i === 3) {
//         continue;
//     }

//     console.log(i);
// }
senelis: for (var z = 0; z < 5; z++) {
for (var j = 0; j < 5; j++) {
for (var i = 0; i < 5; i++) {


        if (i === 3) {
            continue senelis;
        }
        console.log(j,i,z);
        
    }
}
}

var petras = 0, kazys = 0;
do {
    petras += rand(10, 20);
    kazys += rand(5, 25);


    if (petras >= 222 || kazys >= 222) {
        break;
    }

} while(true);
if (petras >= 222 && kazys >= 222) {
    console.log('Nutiko lygios', 'Petras:', petras, 'Kazys:', kazys);
}
else if (petras > kazys) {
    console.log('Laimejo Petras', 'Petras:', petras, 'Kazys:', kazys);
}
else {
    console.log('Laimejo Kazys', 'Petras:', petras, 'Kazys:', kazys);
}

console.log("The End");



var A = 8;

if (A === 6) {
    console.log('A==6');
}
else if (A === 8) {
    console.log('A==8');
}
else if (A === 10) {
    console.log('A==10');
}
else {
    console.log('nei 6, nei 8 nei 10');
}


switch(A) {
    case 6: console.log('A==6');
    break;
    case 8: console.log('A==8');
    break;
    case 10: console.log('A==10');
    break;
    default: console.log('nei 6, nei 8 nei 10');
}

// OMNIVA
//S,M,L,XL

var pack = 'S';
tt: do{
switch(pack) {
    case 'S': console.log('galim deti i S');
        if (rand(0,1)) {
            continue;
        }
    case 'M': console.log('galim deti i M');
        if (rand(0,1)) {
            continue;
        }
    case 'L': console.log('galim deti i L');
        if (rand(0,1)) {
            continue;
        }
    default: console.log('galim deti i XL');
        if (rand(0,1)) {
            console.log('nera vietos');
            break tt;
        }
}
}while(true);

console.log('____________________________________');

var a1 = rand(1, 10);
var a2 = rand(1, 10);
var a3 = rand(1, 10);

console.log(a1, a2, a3);

if (a1+a2>a3 && a2+a3>a1 && a1+a3>a2) {
    console.log('GALIMA');
}
else {
    console.log('NEGALIMA');
}

if (a1>a2 && a1>a3) {
    if(a1<a2+a3) {
        console.log('GALIMA');
    }
    else {
        console.log('NEGALIMA');
    }
}
else if(a2>a1 && a2>a3) {
    if(a2<a1+a3) {
        console.log('GALIMA');
    }
    else {
        console.log('NEGALIMA');
    }
}
else {
    if(a3<a1+a2) {
        console.log('GALIMA');
    }
    else {
        console.log('NEGALIMA');
    }
}



var b1 = rand(0, 2);
var b2 = rand(0, 2);
var b3 = rand(0, 2);
var b4 = rand(0, 2);

var nuliai = 0, vienetai = 0, dvejetai = 0;

console.log('____________________________________');

console.log(b1,b2,b3,b4);

if (b1===2){
    dvejetai++;
}
if (b2===2){
    dvejetai++;
}
if (b3===2){
    dvejetai++;
}
if (b4===2){
    dvejetai++;
}

vienetai = b1 + b2 + b3 + b4 - (dvejetai * 2);

nuliai = 4 - vienetai - dvejetai;

console.log(nuliai, vienetai, dvejetai);





