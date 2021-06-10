

const gs = document.querySelector('.gray-circle');
const gs1 = document.querySelector('.gray-square');

const goClick = function(eventas) {

    // if (eventas.target.classList.contains('orange')) {
    //     eventas.target.classList.remove('orange');
    // }
    // else {
    //     eventas.target.classList.add('orange');
    // }

    gs.classList.toggle('orange');
    console.log(eventas.target);
}

const goClick1 = function(eventas) {
    eventas.stopPropagation();
    eventas.preventDefault();
    console.log(eventas.target);
    gs1.classList.toggle('orange');
}



// gs.addEventListener('mouseover', goClick);
gs.addEventListener('click', goClick);

gs1.addEventListener('click', goClick1);



// for (let elem of document.querySelectorAll('*')) {
//     // elem.addEventListener("click", e => console.log(`Capturing: ${elem.tagName}`), true);
//     elem.addEventListener("click", e => console.log(`Bubbling: ${elem.tagName}`));
//   }