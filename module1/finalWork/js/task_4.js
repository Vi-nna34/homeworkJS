'use strict';
const credits = 23580;
const pricePerDroid = 3000;
const droidNumber = prompt('Ведіть кількість:');
const totalPrice = pricePerDroid * Number(droidNumber);
if (droidNumber === null) {
    console.log('Скасовано користувачем!');
} else if (credits < totalPrice) {
    console.log('Недостатньо коштів на рахунку!');
} else {
    console.log(`Ви купили ${droidNumber} дроїдів, на рахунку залишилося ${credits - totalPrice} кредитів`);
}