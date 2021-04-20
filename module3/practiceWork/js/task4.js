'use strict';
const cafe = {
    name: 'Republic',
    width:200,
    height: 300,
    personal:5,
    hr: true 
}
const cafeEntries = Object.entries(cafe);

for (const entry of cafeEntries) {
    const key = entry[0];
    const value = entry[1];
  
    console.log(`${key}: ${value}`);
}

cafe.getSquare = function () {
    const square = this.width * this.height;
    return square
}

console.log(cafe.getSquare());