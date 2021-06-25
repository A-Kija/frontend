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
    if (Array.isArray(val)) { // ar masyvas
        val.forEach(bbz);// rekursija
    }
    else {
        const textN = document.createTextNode(val); // DOM dalis
        const element = document.createElement('h3'); // DOM dalis
        element.appendChild(textN);
        where.appendChild(element);
    }
}

const bbz1 = (val) => {
    const textN = document.createTextNode(val); // DOM dalis
    const element = document.createElement('h3'); // DOM dalis
    element.appendChild(textN);
    where.appendChild(element);
}

const bbz2 = (val) => {
    val.forEach( v => {
        const textN = document.createTextNode(v); // DOM dalis
        const element = document.createElement('h3'); // DOM dalis
        element.appendChild(textN);
        where.appendChild(element);
    })
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

//________________10________________

document.querySelector('#reset').addEventListener('click', () => {

    arr1 = arr2 = arr3 = arr4 = arr5 = [];
    
});

//________________11________________

document.querySelector('#clear').addEventListener('click', () => {

    document.querySelectorAll('h3').forEach(h3 => h3.remove());
    
});


//________________12________________
// document.querySelector('#gojson').addEventListener('click', () => {
//     const obj = {
//         arr1: arr1,
//         arr2: arr2,
//         arr3: arr3,
//         arr4: arr4,
//         arr5: arr5
//     }
//     const jsonString = JSON.stringify(obj);
//     console.log(jsonString);
//     const obj2 = JSON.parse(jsonString);
//     console.log(obj2);

    // Antika
    // const keys = Object.keys(obj2);
    // for (let i = 0; i < keys.length; i++) {
    //     console.log(obj2[keys[i]]);
    // }

    // Object.entries(obj2).forEach(item => {
    //     console.log(item)
    //   })

//     for(const prop in obj2) {
//         obj2[prop].forEach(bbz);
//     }
// });


document.querySelector('#gojson').addEventListener('click', () => {
    const obj = {
        arr1: arr1,
        arr2: arr2,
        arr3: arr3,
        arr4: arr4,
        arr5: arr5
    }
    const jsonString = JSON.stringify(obj);
    console.log(jsonString);
    const obj2 = JSON.parse(jsonString);
    console.log(obj2);

    for(const prop in obj2) {
        if (Array.isArray(obj2[prop][0])) {
            obj2[prop].forEach(bbz2);
        }
        else {
            obj2[prop].forEach(bbz1);
        }
        
    }
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
