

const [A, B, C] = ['labas', 99, 'rytas'];

const atgal = [A, B, C]

console.log(A);
console.log(B);
console.log(atgal);


const masyvas1 = [55, 77, 99, 100]; // => {a1: 55, a2: 77, a3: 99, a4: 100}
const masyvas2 = [55, 77, 99, 100, 777]; // => {a1: 55, a2: 77, a3: 99, a4: 100, a5: 777}

const json = '[{"id":1,"title":"Gro\u017ein\u0117 literat\u016bra"},{"id":2,"title":"Populiarioji psichologija"},{"id":3,"title":"Literat\u016bra vaikams ir jaunimui"},{"id":4,"title":"Pom\u0117giai"},{"id":5,"title":"\u0160eima, sveikata"},{"id":6,"title":"Literat\u016bra u\u017esienio kalbomis"},{"id":7,"title":"Dalykin\u0117 literat\u016bra"},{"id":8,"title":"Vadov\u0117liai, pratybos ir knygos mokslams"}]';




//1.
const obj = {};
// masyvas1.forEach((e, i) => obj['a' + (i + 1)] = e);
for (let i = 0; i < masyvas1.length; i++) {
    const prop = 'a' + (i + 1);
    obj[prop] = masyvas1[i];
}
console.log('-1-', obj);


//2.
const mas = [];
for (const prop in obj) {
    mas.push(obj[prop]);
}
console.log('-2-', mas);


//3.
window.addEventListener('DOMContentLoaded', () => {

    const types = JSON.parse(json);
//4.------------------------------------------
        types.sort((a, b) => {
            if (a.title > b.title) {
                return 1;
            }
            if (a.title < b.title) {
                return -1;
            }
            return 0;
        });
//4.----------------------------------------
    console.log('-3-', types);

    const body = document.querySelector('body');
    const ul = document.createElement('ul');
    body.appendChild(ul);

    types.forEach(element => {
        const t = document.createTextNode(element.title);
        const li = document.createElement('li');
        li.appendChild(t);
        ul.appendChild(li);
    });

});

//5.---------------------
const arr = [5, 8, 9, 22];

const arr1 = [];
const arr2 = [];

arr.forEach(e => arr1.push(e * 2));

for (let i= 0; i < arr.length; i++) {
    arr2.push(arr[i] * 2);
}

const arr3 = arr.map(e => e * 2);

console.log('-51-', arr1);
console.log('-52-', arr2);
console.log('-53-', arr3);

    
    
