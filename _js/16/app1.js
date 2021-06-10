


const divList = document.querySelectorAll('div');

console.log(divList);

for (let i = 0; i < divList.length; i++) {

    console.log(i, i % 2);

    if (i % 2 === 0) {
        divList[i].classList.add('abc');
    }
    else {
        divList[i].style.height = '100px';
        divList[i].style.width = '100px';
        divList[i].style.backgroundColor = 'gray';
    }

}