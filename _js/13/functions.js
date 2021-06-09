function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const A = 1;

const C = 2;

const B = 3;


function sum(a, b, c, funX2) {
    let s = a + b + funX2(c, 100);
    return s;
}


const resA = sum( C, B, A, (tt, bb) => 5 * tt + bb);
    
    

const resB = sum(A, B, C, function(h, zz) { 
    let r = 5 * h + zz;
    return r; 
});




console.log('res', resA, resB);



const m1 = [1, 2, 3];
console.log(m1);


function f7(mas, fun) {
    for (let i = 0; i < mas.length; i++) {
        mas[i] = fun();
    }
}


f7(m1, () => ['red', 'blue', 'green'][rand(0, 2)]);

f7(m1, function(){
    return ['red', 'blue', 'yellow'][rand(0, 2)];
});

const color1 = () => ['red', 'blue', 'yellow'][rand(0, 2)];

const color2 = function(){
    return ['red', 'blue', 'yellow'][rand(0, 2)];
}

f7(m1, color1);

f7(m1, color2);

array1 = ["Pingvinas", "Zebras", "Voras", "Vilkas", "Zuikis"];

let map1 = array1.map(x => x.length);

console.log(map1);

const mx =  [8, "B", 9, 7, "A", 6, 12, "B", "B", "A", 48, 0, "A", 6];

mx.sort((a, b) => {
    if (a === "A") return 1;
    if (b === "B") return 1;
    if (b === "A") return -1;
    if (a === "B") return -1;
    return b - a;
})
console.log(mx);