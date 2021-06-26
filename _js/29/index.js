
const ar = [77,99,'105',42];

const obj = {a:55,z:77,r:98,y:42};

// for (const val of obj) {
//     console.log(val);
// }

// for (const val in ar) {
//     console.log(val, ar[val]);
// }

const mySet1 = new Set();

mySet1.add(1);
mySet1.add(2);
mySet1.add(2);
mySet1.add("1");
mySet1.add('some text');
mySet1.add('some text');
const o1 = {a: 1, b: 2};
const o2 = {a: 1, b: 2};
o3 = o2;
mySet1.add(o1);
mySet1.add(o2);
mySet1.add(o2);
mySet1.add(o2);
mySet1.add(o3);
let c1 = 'a';
let c2 = 'a';
++c1;
++c2;
console.log('===', c1 === c2);
mySet1.add(c1);
mySet1.add(c2);

mySet1.delete("1");
mySet1.delete(1);

console.log('1', mySet1.has("1"));
console.log('Some text', mySet1.has('Some text'));

console.log('length', mySet1.length);
console.log('size', mySet1.size);

console.log(mySet1);

for (const val of mySet1) {
    console.log(val);
}

const mySet2 = new Set('Bla Bla Blu');
console.log(mySet2);


const mySet3 = new Set(['Bla', 'Ala', 'Blu']);
//---------------------------------------------------
const a = [...mySet3]; // ['Bla', 'Ala', 'Blu']
a.sort();
// const ooo = {a:1, b:2} 
// const oooCopy = {...ooo}
console.log(a);
mySet3.clear();

a.forEach(v => mySet3.add(v));

console.log('set3', mySet3);

console.log('json', JSON.stringify(new Set(['Bla', 'Ala', 'Blu'])));

function sum(a, b) {
    console.log('suma', a + b);
}

sum(4, 5);
const sm = [10, 21];
sum(...sm);


console.log('-----------------------------------------');
//1.
const u = new Set(['Cat', 'Dog', 'Cow']);
//2.
for (const v of u) {
    console.log(v);
}
//3.
const m = [...u];
console.log(m);
//4.
m.push('Behemoth');
m.push('Crocodile');
//5.
m.forEach(v => u.add(v));
console.log(u);
//6.
const u2 = new Set();
for (const v of u) {
    u2.add( v[0] );
}
console.log(u2);
//7.
const m2 = [...u2];
m2.sort();
u2.clear();
m2.forEach(v => u2.add(v));
console.log(u2);