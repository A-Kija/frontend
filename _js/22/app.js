
const ab = ['a','a','b','a','a','a','b','a','a','b','b'];

// 1. naudojamas ciklas for. Atskirai padaryti console.log
// kiekvienai masyvo reikšmei + kelintas kartas

for (let i = 0; i < ab.length; i++) {
    // console.log(ab[i]);
}

// 2. naudojamas ciklas for. Atskirai padaryti console.log
// kiekvienam masyvo indeksui

for (let i = 0; i < ab.length; i++) {
    // console.log(i);
}

// 3. naudojamas ciklas for. Atskirai padaryti console.log
// kiekvienai "a" masyvo reikšmei

// 4. naudojamas ciklas for. Atskirai padaryti console.log
// kiekvienam masyvo indeksui, kurio reikšmė yra "b"

function f1(array, index) {
    return array[index] === 'b'
}

const an1 = function(array, index) {
    return array[index] === 'b'
}

const an2 = (array, index) => array[index] === 'b';



for (let i = 0; i < ab.length; i++) {
    if (ab[i] === 'b') {
        console.log(i);
    }
}
console.log("----------------Vardine------------------");

for (let i = 0; i < ab.length; i++) {
    if ( f1(ab, i) ) {
        console.log(i);
    }
}

console.log("----------------Anonimine fn------------------");

for (let i = 0; i < ab.length; i++) {
    if ( an1(ab, i) ) {
        console.log(i);
    }
}

console.log("----------------Anonimine =>------------------");

for (let i = 0; i < ab.length; i++) {
    if ( an2(ab, i) ) {
        console.log(i);
    }
}



const cde = ['c','d','e'];

// 5, 6, 7, 8 analogiškai bet su forEach ciklu ir => func

// 5.
// ab.forEach(arrayValue => console.log(arrayValue));

//6.
// ab.forEach((value, index) => console.log(index));

//7.
ab.forEach(arrayValue => {
    if (arrayValue === 'a') {
        // console.log(arrayValue);
    }
});


//8.
ab.forEach((value, index) => {
    if (value === 'b') {
        // console.log(index);
    }
});