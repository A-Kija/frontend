class Tv {
    constructor(is, kanalai, title) {
        this.istrizaine = is;
        this.kanalai = kanalai;
        this.title = title;
    }

    putIn() {
        localStorage.setItem(this.title, JSON.stringify(this));
    }

    getBack()  {
        let out3 = localStorage.getItem(this.title);
        out3 = JSON.parse(out3);
        return [out3.istrizaine, out3.kanalai, out3.title];
    }


}

const tv1 = new Tv(78, ['LTV', 'TV3', 'LNK'], 'tv1');
const tv2 = new Tv(32, ['Discovery', 'GC', 'MTV'], 'tv2');


tv1.putIn();
let out1 = new Tv(...tv1.getBack());
out1.istrizaine++;
out1.putIn();
out1 = new Tv(...out1.getBack());

tv2.putIn();
let out2 = new Tv(...tv2.getBack());
out2.istrizaine++;
out2.putIn();
out2 = new Tv(...out2.getBack());

// console.log(out1);
// console.log(out2);




//-----------------------------------------------

const tv3 = {
    istrizaine: 78,
    kanalai: ['LTV', 'TV3', 'LNK']
};
const tv4 = {
    istrizaine: 32,
    kanalai: ['Discovery', 'GC', 'MTV']
};

localStorage.setItem('tv3', JSON.stringify(tv3));
let out3 = localStorage.getItem('tv3');
out3 = JSON.parse(out3);
out3.istrizaine++;
localStorage.setItem('tv3', JSON.stringify(out3));
out3 = localStorage.getItem('tv3');
out3 = JSON.parse(out3);

localStorage.setItem('tv4', JSON.stringify(tv4));
let out4 = localStorage.getItem('tv4');
out4 = JSON.parse(out4);
out4.istrizaine++;
localStorage.setItem('tv4', JSON.stringify(out4));
out4 = localStorage.getItem('tv4');
out4 = JSON.parse(out4);


// console.log(out3);
// console.log(out4);


class Sorter {
    constructor(ar) {
        this.arr = ar;
    }
    sortByAsc() {
        this.arr.sort();
        return this.arr.slice(); 
    }
    sortByDesc() {
        this.arr.sort((a, b) => a > b ? -1 : 1);
        return this.arr.slice();
    }
    sortByDescLength() {
        this.arr.sort((a, b) => b.length - a.length);
        return this.arr.slice(); 
    }
    sortByAscLast() {
        this.arr.sort((a, b) => a[a.length - 1] < b[b.length - 1] ? -1 : 1);
        return this.arr.slice();
    }
}

class SetSorter {
    constructor(ar) {
        this.set = ar;
        this.arr = [...ar];
    }
    arrayToSet() {
        this.set.clear();
        this.arr.forEach(v => this.set.add(v));
        return this.set;
    }
    sortByAsc() {
        this.arr.sort();
        return this.arrayToSet(); 
    }
    sortByDesc() {
        this.arr.sort((a, b) => a > b ? -1 : 1);
        return this.arrayToSet();
    }
    sortByDescLength() {
        this.arr.sort((a, b) => b.length - a.length);
        return this.arrayToSet(); 
    }
    sortByAscLast() {
        this.arr.sort((a, b) => a[a.length - 1] < b[b.length - 1] ? -1 : 1);
        return this.arrayToSet();
    }
}

const sorter = new Sorter(['LTV', 'TV3', 'LNK', 'Polonia', 'SAT1']);

console.log(sorter.sortByAsc());
console.log(sorter.sortByDesc());
console.log(sorter.sortByDescLength());
console.log(sorter.sortByAscLast());


// console.log(['a','A',2].sort());

const original = new Set(['LTV', 'TV3', 'LNK', 'Polonia', 'SAT1']);
console.log('original', original);
const sorter2 = new SetSorter(original);
console.log(sorter2.sortByAsc());
console.log(sorter2.sortByDesc());
console.log(sorter2.sortByDescLength());
// console.log(sorter2.sortByAscLast());




