
// Skaiciu palyginimas

var a = 5;
console.log('2 > 3', 2 > 3); // daugiau
console.log('2 < 3', 2 < 3); // maziau
console.log('2 == 3', 2 == 3); // lygu
console.log('a(5) = 3', a = 3); // priskyrimas ne salyga
console.log('2 != 3', 2 != 3); // nelygu
console.log('2 >= 3', 2 >= 3); // daugiau arba lygu
console.log('2 <= 3', 2 <= 3); // maziau arba lygu


// Stringu palyginimas

console.log('A == Z', 'A' == 'Z'); // lygu
console.log('A != Z', 'A' != 'Z'); // nelygu
console.log('A > Z', 'A' > 'Z'); // daugiau
console.log('AA > AB', 'AA' > 'AB'); // daugiau
console.log('CA > AB', 'CA' > 'AB'); // daugiau
console.log('CAA > CA', 'CAA' > 'CA'); // daugiau
console.log('A == a', 'A' == 'a'); // daugiau
console.log('A < a', 'A' < 'a'); // daugiau
console.log('Z < a', 'Z' < 'a'); // daugiau
console.log('ą < a', 'ą' < 'a'); // daugiau


// Mišrus palyginimas
var number = 2; 
var string = '2'; 

console.log('2 == "2"', number == string); // lygu
console.log('1 == "01"', 1 == '01'); // lygu
console.log('1 == "A"', 1 == 'A'); // lygu
console.log('1 === "1"', 1 === '1'); // identiška
console.log('1 !== "1"', 1 !== '1'); // neidentiška
console.log('false == 0', false == 0); // lygu
console.log('true == 1', true == 1); // lygu
console.log('"" == false', '' == false); // lygu
console.log('"" === false', '' === false); // identikša

var nothing = null; // Niekas, tuščia vieta, juodoji skylė, vakumas
var undefine; // Dar neaišku kas bus

console.log(typeof nothing);
console.log(typeof undefine);

console.log('nothing == undefine', nothing == undefine); // lygu

// console.log(nothing++);
// console.log(typeof nothing);

console.log('null == 0', null == 0); // lygu

var bool = true;
console.log(bool);
bool = String(bool);
console.log(typeof bool);
console.log(bool);
var bool2 = false;
console.log(bool2);
bool2 = Number(bool2);
console.log(typeof bool2);
console.log(bool2);

var strage = '     0000555      ';
strage = Number(strage);
console.log(strage);
