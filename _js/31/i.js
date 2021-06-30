const notSoEasy = [
    [1,8],
    new Set([7, 9]),
    new Set(),
    new Map([['a',2], ['b',2], ['c',2]]),
    [1,8,7],
    new Set([7, 9, 11]),
    [],
    new Set([7, 9, 71, 11, 45]),
    new Map([['a',2], ['c',2]]),
];
// masyvai, mapai, setai

notSoEasy.sort((a, b) => {
    if (a.constructor.name === b.constructor.name) {
            return 0;
        }
    if (a instanceof Array) {
        return -1;
    }
    if (a instanceof Map) {
        if (b instanceof Array) {
            return 1;
        }
        if (b instanceof Set) {
            return -1;
        };
    }
    if (a instanceof Set) {
        return 1;
    }
});
console.log(notSoEasy);


const m1 = ['z', 's', 'a', 'd'];
const m2 = [
    ['zru', 'six'],
    ['rot', 'dzi'],
    ['uxm', 'ycw'],
    ['otr', 'sth']
];
const m3 = [
    new Map([['dog', 5], ['cat', 7], ['snake', 58]]),
    new Map([['snake', 33], ['dog', 14], ['cat', 8]]),
    new Map([['dog', 51], ['cat', 77], ['snake', 23]]),
    new Map([['cat', 10], ['dog', 23], ['snake', 17]])
];

const m4 = [
    [2,5,8,9,7,4,5,2,1,5,8,9,3],
    [3,6,9,800,5,4],
    [2,5,4,7,9,5,4,1,2,3,6,9,8,4,7],
    [5,2,1,4,7,8,5,3,1]
];

const m5 = [4,5,6,9,45,4,7,8,5,2,4,8,2,1,3,32,41,85,6,8,5,6,78,11,6,8,];



console.log(m5);

const m1A = m1.slice();
m1A.sort();
console.log(m1A);

const m2A = m1.slice();
m2A.sort((a, b) => a < b ? -1 : 1);
console.log(m2A);

const m3A = m1.slice();
m3A.sort((a, b) => a > b ? -1 : 1);
console.log(m3A);

document.querySelector('#a').addEventListener('click', () => {
    const m4A = m1.slice();
    m4A.sort((a, b) => a < b ? -1 : 1);
    console.log(m4A);
});

document.querySelector('#b').addEventListener('click', () => {
    const m4A = m1.slice();
    m4A.sort((a, b) => a > b ? -1 : 1);
    console.log(m4A);
});

const m6A = m2.slice();
m6A.sort((a, b) => a[1] < b[1] ? -1 : 1);
console.log(m6A);

const m7A = m2.slice();
m7A.sort((a, b) => a[0] > b[0] ? -1 : 1);
console.log(m7A);

const m8A = m2.slice();
m8A.sort((a, b) => a[1][1] < b[1][1] ? -1 : 1);
console.log(m8A);

const m10A = m3.slice();
m10A.sort((a, b) => a.get('cat') > b.get('cat') ? -1 : 1);
console.log(m10A);


const m13A = m4.slice();
m13A.sort((a, b) => {
    let aSum = 0;
    a.forEach(v => aSum += v);
    let bSum = 0;
    b.forEach(v => bSum += v);
    return aSum - bSum;
});
console.log(m13A);

const m13rA = m4.slice();
m13rA.sort((a, b) => a.reduce((sum, v) => sum + v) - b.reduce((sum, v) => sum + v));

console.log(m13rA);


const m14A = m5.filter(v => v <= 7)
const nice = m5.filter(v => 7 <= v)

console.log(m14A);
console.log(nice);

const m15A = m3.filter(v => 10 <= v.get('dog'));

console.log(m15A);



