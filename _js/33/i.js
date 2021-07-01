// NR 1

class Kibiras1 {
    constructor() {
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni() {
        this.akmenuKiekis ++;
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
    }

    kiekPririnktaAkmenu() {
        console.log('Akmenų yra va tiek:', this.akmenuKiekis);
    }
}

const kibiras = new Kibiras1();
const viedras = new Kibiras1();
const kasikas = new Kibiras1();


kibiras.kiekPririnktaAkmenu();
viedras.kiekPririnktaAkmenu();
kasikas.kiekPririnktaAkmenu();
console.log('------------------------------');

viedras.prideti1Akmeni(100);


kibiras.kiekPririnktaAkmenu();
viedras.kiekPririnktaAkmenu();
kasikas.kiekPririnktaAkmenu();
console.log('------------------------------');


kasikas.pridetiDaugAkmenu(22);
viedras.pridetiDaugAkmenu(22);


kibiras.kiekPririnktaAkmenu();
viedras.kiekPririnktaAkmenu();
kasikas.kiekPririnktaAkmenu();
console.log('------------------------------');


// Nr. 2

class Pinigine {

    constructor() {
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
    }

    ideti(kiekis) {
        if (kiekis <= 2) {
            this.metaliniaiPinigai += kiekis;
        }
        else {
            this.popieriniaiPinigai += kiekis;
        }
    }

    skaiciuoti() {
        console.log('Yra va tiek pinigų', this.metaliniaiPinigai + this.popieriniaiPinigai);
    }
} 

const odinePinigine = new Pinigine();
const plastikinePinigine = new Pinigine();

odinePinigine.skaiciuoti();
plastikinePinigine.skaiciuoti();
console.log('------------------------------');

odinePinigine.ideti(235);
plastikinePinigine.ideti(0.87);
odinePinigine.ideti(100);
plastikinePinigine.ideti(1);
odinePinigine.ideti(100);
plastikinePinigine.ideti(10);

odinePinigine.skaiciuoti();
plastikinePinigine.skaiciuoti();
console.log('------------------------------');