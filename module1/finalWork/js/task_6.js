'use strict';
let input;
let total = 0;
do {
    input = prompt('Enter number:');
   if (input === null) {
        console.log(total);
        break
    }
    total += Number(input);
} while (true);

