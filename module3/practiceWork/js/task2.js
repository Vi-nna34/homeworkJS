'use strict';
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const multiply = function (object) {
   const values = Object.values(object);
   let sum = 0;
   for (const value of values) {
       sum += value
   }
   return sum
}

console.log(multiply(salaries));

