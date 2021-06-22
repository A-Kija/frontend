let arr1 = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];
let arr5 = [];
//1
document.querySelector('#button1').addEventListener('click', () => {
    console.log(document.querySelector('#_1').value);
    arr1.push(document.querySelector('#_1').value);
    console.log(arr1);
});



//2
document.querySelector('#_2').addEventListener('change', event => { 
    console.log(event.target.value);
    arr2.push(event.target.value);
    console.log(arr2);
});



//3 
document.querySelectorAll('[name=_3]').forEach(radio => {
    radio.addEventListener('change', event => {
        console.log(event.target.value);
        arr3.push(event.target.value);
        console.log(arr3);
    });
});


//4
document.querySelector('#_4').addEventListener('change', event => {
    if (event.target.checked) {
        console.log('Pažymėta');
        arr4.push('Pažymėta');
        console.log(arr4);
    }
    else {
        console.log('Nepažymėta');
        arr4.push('Nepažymėta');
        console.log(arr4);
    }
});


//5
document.querySelectorAll('[name=_5]').forEach(chEl => {
    chEl.addEventListener('change', () => {
        console.log('----------------------------');
        const temp = [];
        document.querySelectorAll('[name=_5]').forEach(ch => {
            if (ch.checked) {
                console.log(ch.value);
                temp.push(ch.value);
            }
        });
        arr5.push(temp);
        console.log(arr5);
    });
});

const bbz = (val) => {
    const textN = document.createTextNode(val); // DOM dalis
    const element = document.createElement('h3'); // DOM dalis
    element.appendChild(textN);
    where.appendChild(element);
}

//6. 
const h1 = document.querySelector('h1');



const where = document.querySelector('body');

document.querySelector('#go').addEventListener('click', () => {

    arr1.forEach(bbz);
    arr2.forEach(bbz);
    arr3.forEach(bbz);
    arr4.forEach(bbz);
    arr5.forEach(v =>{
        console.log(v);
        let allTextsInOne = ''
        v.forEach(t => allTextsInOne += t + ' ');
        bbz(allTextsInOne);
    });
    
});


// document.querySelectorAll('[name=_5]').forEach(chEl => {
//     chEl.addEventListener('change', () => {
//         console.log('----------------------------');
//         let out = '';
//         document.querySelectorAll('[name=_5]').forEach(ch => {
//             if (ch.checked) {
//                 out += ch.value + ' ';
//             }
//         });
//         h1.innerText = out;
//     });
// });
