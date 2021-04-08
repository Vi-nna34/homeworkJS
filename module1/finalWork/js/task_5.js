'use strict';
let price;
const country = prompt('Введіть країну:');
const normCountry = country.toLowerCase();
switch (normCountry) {
  case 'китай':
    price = 100;
    console.log(`Доставка в ${country} буде коштувати ${price} кредитів`);
    break;

  case 'чилі':
    price = 250;
    console.log(`Доставка в ${country} буде коштувати ${price} кредитів`);
    break;

  case 'австралія':
    price = 170;
    console.log(`Доставка в ${country} буде коштувати ${price} кредитів`);
    break;

  case 'індія':
    price = 80;
    console.log(`Доставка в ${country} буде коштувати ${price} кредитів`);
    break;  

  case 'ямайка':
    price = 120;
    console.log(`Доставка в ${country} буде коштувати ${price} кредитів`);
    break;
  
  default:
    alert('У вашій країні доставка недоступна');
}