//1
document.querySelector('#button1').addEventListener('click', () =>
console.log(document.querySelector('#_1').value));


//2
document.querySelector('#_2').addEventListener('change', event =>
console.log(event.target.value));

//3 
document.querySelectorAll('[name=_3]').forEach(radio => {
    radio.addEventListener('change', event => console.log(event.target.value));
})