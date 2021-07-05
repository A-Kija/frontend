const mas1 = ['cat', 'bird', 'tiger', 'dog'];
const set1 = new Set(['cat', 'bird', 'tiger', 'dog']);
const map1 = new Map([['medium','cat'], ['small','bird'], ['big','tiger'], ['unknown','dog']]);

console.log(mas1);
console.log(set1);
console.log(map1);

//1
// mas1.sort((a, b) => {
//     if (a === b) {
//         return 0;
//     }
//     return a < b ? -1 : 1;
// });
// console.log(mas1);
// mas1.sort((a, b) => {
//     if (a === b) {
//         return 0;
//     }
//     return a > b ? -1 : 1;
// })
// console.log(mas1);

//3
class Sorter {

    static sortAsc(data, byKey = false) {
        if (data instanceof Array) {
            return this.sortArrAsc(data)
        }
        if (data instanceof Set) {
            return this.sortSetAsc(data)
        }
        if (data instanceof Map) {
            return this.sortArrAscM(data,!byKey)
        }

    }
    static sortDesc(data, byKey = false) {
        if (data instanceof Array) {
            return this.sortArrDesc(data)
        }
        if (data instanceof Set) {
            return this.sortSetDesc(data)
        }
        if (data instanceof Map) {
            return this.sortArrDescM(data,!byKey)
        }
    }

    static sortSetAsc(set) {
        const arr = this.sortArrAsc([...set]);
        set.clear();
        arr.forEach(v => set.add(v));
        return set;
    }

    static sortSetDesc(set) {
        const arr = this.sortArrDesc([...set]);
        set.clear();
        arr.forEach(v => set.add(v));
        return set;
    }

    static sortArrAsc(arr) {
        arr.sort((a, b) => {
            if (a === b) {
                return 0;
            }
            return a < b ? -1 : 1;
        });
        return arr;
    }
    static sortArrDesc(arr) {
        arr.sort((a, b) => {
            if (a === b) {
                return 0;
            }
            return a > b ? -1 : 1;
        });
        return arr;
    }

    static sortArrAscM(map, byValue = true) {
        const key = byValue ? 1 : 0;
        const arr = [...map];
        
        arr.sort((a, b) => {
            if (a[key] === b[key]) {
                return 0;
            }
            return a[key] < b[key] ? -1 : 1;
        });
        map.clear();
        arr.forEach(v => map.set(v[0], v[1]));
        return map;
    }
    static sortArrDescM(map, byValue = true) {
        const key = byValue ? 1 : 0;
        const arr = [...map];
        arr.sort((a, b) => {
            if (a[key] === b[key]) {
                return 0;
            }
            return a[key] > b[key] ? -1 : 1;
        });
        map.clear();
        arr.forEach(v => map.set(v[0], v[1]));
        return map;
    }
}


console.log(Sorter.sortAsc(mas1));
console.log(Sorter.sortAsc(set1));
console.log(Sorter.sortAsc(map1, true));