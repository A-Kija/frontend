const words = ["Labas Rytas","Laba Diena","Labas Vakaras"];
const h1 = document.querySelector('h1');

const abc = {
    a: 'b',
    b: {k: 1, z: 22, z: "ąžčęė"},
    c: [1,2,3] 
};

document.querySelector('#case-1').addEventListener('change', (select) => {
    h1.innerText = select.target.value;
});

document.querySelector('#case-2').addEventListener('change', (select) => {
    h1.innerText = words[select.target.value];
});

const js = JSON.stringify(abc);

console.log(js);

console.log(JSON.parse(js));



document.querySelector('button').addEventListener('click', () => {
    fetch('http://127.0.0.1:5500/_js/21/labas.txt')
    .then(response => response.text())
    .then(data => h1.innerHTML = data);
});


fetch('https://in3.dev/vinted/api/brands/all')
  .then(response => response.json())
  .then(data => {
      data.forEach(element => {
          console.log(element.title)
      });
  });


const brand = 'MAC';

h1.innerHTML = '<li>'+brand+'</li>';

