function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const obj = new Object();

console.log(typeof obj);

class  Gyvuliukas {

}


class Kate extends Gyvuliukas {

    constructor()
    {
        super();
        this.age = rand(1, 8);
    }

    voice = () => console.log('miau');

    getAge() {
        console.log(this)
    } 

    getAge1 = () => console.log(this.age);

}

const ka1 = new Kate();
const ka2 = new Kate();

console.log(obj);
console.log(ka2);
// ka2.getAge();

setTimeout(ka2.getAge, 1000);
setTimeout(ka2.getAge1, 1000);
