//1
document.querySelector('#button1').addEventListener('click', () =>
console.log(document.querySelector('#_1').value));


//2
document.querySelector('#_2').addEventListener('change', event =>
console.log(event.target.value));



//3 
document.querySelectorAll('[name=_3]').forEach(radio => {
    radio.addEventListener('change', event => console.log(event.target.value));
});


//4
document.querySelector('#_4').addEventListener('change', event => {
    if (event.target.checked) {
        console.log('Pažymėta');
    }
    else {
        console.log('Nepažymėta');
    }
});


//5
document.querySelectorAll('[name=_5]').forEach(chEl => {
    chEl.addEventListener('change', () => {
        console.log('----------------------------');
        document.querySelectorAll('[name=_5]').forEach(ch => {
            if (ch.checked) {
                console.log(ch.value);
            }
        });
    });
});