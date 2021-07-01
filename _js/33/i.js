// NR 1

class Kibiras1 {

    static bendrasAkmenuKiekis = 0;

    static skaiciuotiVisusAkmenis(kiekis) {
        this.bendrasAkmenuKiekis += kiekis;
    }

    static kiekPririnktaAkmenu() {
        console.log('Viso jau surinkta tiek', this.bendrasAkmenuKiekis, 'akmenų');
    }

    constructor() {
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni() {
        this.constructor.skaiciuotiVisusAkmenis(1);
        this.akmenuKiekis ++;
    }

    pridetiDaugAkmenu(kiekis) {
        this.constructor.skaiciuotiVisusAkmenis(kiekis);
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
Kibiras1.kiekPririnktaAkmenu();
console.log('------------------------------');

viedras.prideti1Akmeni(100);


kibiras.kiekPririnktaAkmenu();
viedras.kiekPririnktaAkmenu();
kasikas.kiekPririnktaAkmenu();
Kibiras1.kiekPririnktaAkmenu();
console.log('------------------------------');


kasikas.pridetiDaugAkmenu(22);
viedras.pridetiDaugAkmenu(22);


kibiras.kiekPririnktaAkmenu();
viedras.kiekPririnktaAkmenu();
kasikas.kiekPririnktaAkmenu();
Kibiras1.kiekPririnktaAkmenu();
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

// NR 4.


class PirkiniuKrepselis {

    constructor() {
        this.turinys = new Map();
    }

    idetiProdukta(kiekis, produktas) {
        if (this.turinys.has(produktas)) {
            const t = this.turinys.get(produktas);
            this.turinys.set(produktas, kiekis + t);
        }
        else {
            this.turinys.set(produktas, kiekis);
        }
    }

    idetiSureli(kiekis) {
        this.idetiProdukta(kiekis, 'sureliai');
    }

    idetiPieno(kiekis) {
        this.idetiProdukta(kiekis, 'pienukas');
    }

    idetiDuonos(kiekis) {
        this.idetiProdukta(kiekis, 'batonai');
    }

    krepselioTurinys() {
        console.log('KR TR', this.turinys);
    }
}


const krepselis = new PirkiniuKrepselis();


krepselis.krepselioTurinys();
console.log('------------------------------');

krepselis.idetiPieno(1);
krepselis.idetiSureli(5);
krepselis.idetiSureli(11);
krepselis.idetiDuonos(1);
krepselis.idetiPieno(2);

krepselis.krepselioTurinys();
console.log('------------------------------');


// NR 3.

class Troleibusas {

    constructor() {
        this.keleiviuSkaicius = 0;
    }

    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius += keleiviuSkaicius;
    }

    islipa(keleiviuSkaicius) {
        if (keleiviuSkaicius > this.keleiviuSkaicius) {
            console.log('Per daug keleivių išlipa!');
            this.keleiviuSkaicius = 0;
        }
        else {
            this.keleiviuSkaicius -= keleiviuSkaicius;
        }
    }

    vaziuoja() {
        console.log('Šiuo metu važiuoja', this.keleiviuSkaicius, 'keleivių');
    }
}

const TR5 = new Troleibusas;

TR5.vaziuoja();
console.log('------------------------------');

TR5.ilipa(22);
TR5.islipa(12);
TR5.islipa(5);
TR5.ilipa(22);
TR5.islipa(50);
TR5.islipa(50);

TR5.vaziuoja();
console.log('------------------------------');