function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var petras = 0, kazys = 0;
do {
    petras += rand(10, 20);
    kazys += rand(5, 25);
// } while(petras < 222 && kazys < 222);
} while(!(petras >= 222 || kazys >= 222));
if (petras >= 222 && kazys >= 222) {
    console.log('Nutiko lygios', 'Petras:', petras, 'Kazys:', kazys);
}
else if (petras > kazys) {
    console.log('Laimejo Petras', 'Petras:', petras, 'Kazys:', kazys);
}
else {
    console.log('Laimejo Kazys', 'Petras:', petras, 'Kazys:', kazys);
}



