'use strict';
let input;
let total = 0;
do {
    input = prompt('Enter number:');
    if (Number.isNaN(input)) {
        console.log('Ви ввели не число');
        continue
    }
    if (input === null) {
        console.log(total);
        break
    }
    total += Number(input);
} while (true);

