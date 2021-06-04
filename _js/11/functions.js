

function zebras(long, fill, kis)
{
    const masyvas = [];
    for(let i = 0; i < long; i++){
        masyvas.push(fill);
        masyvas.push(kis);
    }
    return masyvas;
}


let A = 5;
let B = 6;
let C = 7;


let AA = zebras(5, 'Trius', 'kiskis');
console.log(AA);
let BB = zebras(B, 'Zebrs');
console.log(BB);
let CC = zebras(C, 'Bebrs');
console.log(CC);

// 3 masyvai su 3 kart i6kviesta ta pacia funkcijo, kad galima butu uzduoti ju ilgi, viduje "A";