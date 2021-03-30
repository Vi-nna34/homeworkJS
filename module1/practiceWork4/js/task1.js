'use strict';

const number = prompt('Please enter a number');
const num = Number(number);

if (Number.isNaN(num)) {
    console.log('Ви ввели не число');
    
} else if (num >= 55 && num <= 99) {
    console.log('Число потрапляє в діапазон');
} else {
    console.log('Число не потрапляє в діапазон');
}
