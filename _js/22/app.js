
const ab = ['a','a','b','a','a','a','b','a','a','b','b'];

// 1. naudojamas ciklas for. Atskirai padaryti console.log
// kiekvienai masyvo reikšmei

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

for (let i = 0; i < ab.length; i++) {
    if (ab[i] === 'b') {
        // console.log(i);
    }
}

// 5, 6, 7, 8 analogiškai bet su forEach ciklu ir => func

// 5.
ab.forEach(arrayValue => console.log(arrayValue));

//6.
ab.forEach((value, index) => console.log(index));

//7.
ab.forEach(arrayValue => {
    if (arrayValue === 'a') {
        console.log(arrayValue);
    }
});


//8.
ab.forEach((value, index) => {
    if (value === 'b') {
        console.log(index);
    }
});