// tevas prototype
// pele.getA() ----> isvestu i console "a" raidziu skaiciu
const logHi = function() {
    console.log(this.valueOf());
}

const letterACounter = function() {
    let counter = 0;
    for (let i = 0; i < this.length; i++) {
        if (this[i] === 'a') {
            counter++;
        }
    }
    console.log('A: ', counter);
}

String.prototype.log = logHi;
String.prototype.getA = letterACounter;


const kate = new String('dvi kates');

const suo = new String('trys šunys');

const pele = new String('daug daug baltų pelių');


// console.log(kate.indexOf(' kat'));
// console.log(kate.valueOf());

kate.log();
suo.log();
pele.log();

pele.getA();

// logHi();
// logHi();
// logHi();

function all() {
    console.log(this);
}


// OBJ = {prop1: 'labas'}

const ufo = {
    hello: 'Labas',
    fly(arr) {
        console.log('start', this);

        const go1 = function(a) {
            console.log('go ne arrow viduje', a, this.hello);
        }
        const go = (a) => {
            console.log('go arrow viduje', a, this.hello);
        }
        const bound = go1.bind(ufo);

        arr.forEach(go);
        arr.forEach(bound);
    },
    sayHello: function() {
        return this.hello;
    }

}
ufo.fly([5, 9, 77]);


const m1 = (...arg) => {
    console.log(arg);
}

const vidurkis = (...arg) => {
    let sum = 0;
    let i;
    for (i = 0; i < arg.length; i++) {
        sum += arg[i];
    }
    console.log(sum/arg.length);
}


m1('lietus', 'RC', 'MR');

const mas = [5, 4];

vidurkis(...mas);

const o1 = {a: 'a', b: 'b', c: 42};

const o2 = {...o1};
// const o2 = o1;

o2.a = 'g';

console.log(o1);
console.log(o2);









