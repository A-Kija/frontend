

const A = 'Ga5465lin465gas s8554trin22gas';

let B = new String('Aš irgi stringas');

let C  = new String('10');

let G = {k:'10'};

B.labas = 'visogero';
A.labas = 'visogero';

console.log('A', A, typeof A, A.length, A.indexOf('ing'), A.labas);

console.log('B', B, typeof B, B.length, B.indexOf('i'), B[4]);

const F = '1 + 3';
const F2 = new String('2 + 5');

let FF = G - 1;

let V1 = '*** ' + A + ' ***';
let V2 = `*** ${A} ***`;

console.log(V1);
console.log(V2);
// console.log(eval(F2.valueOf()));

const regex = /\d{3}/gm;

console.log('indexOf', A.indexOf('lala'));
console.log('charAt', A.charAt(8));
console.log('[]', A[8]);
console.log('charCodeAt', A.charCodeAt(8));
console.log('lastIndexOf', A.lastIndexOf('ing'));
console.log('match', A.match(regex));


let X = new Number(33);


X = X * 3;

console.log('X', X, typeof X);

let zz = 45.2;
let vv = 125.4;
let kitas = zz + vv;


console.log(kitas.toFixed(4), kitas.toPrecision(4));


console.log(Math.PI);
console.log(Math.random());

console.log(Math.round(Math.PI));


