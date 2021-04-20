'use strict';
const calculator = {
    read() {
        this.a = prompt('Enter first number:');
        this.b = prompt('Enter second number:');
    },
    sum() {
        const sum = Number(this.a) + Number(this.b);
        return sum;
    },
    mult() {
        const x = Number(this.a) * Number(this.b);
        return x; 
    }
};

console.log(calculator);
calculator.read();
console.log(calculator);
console.log('sum =', calculator.sum());
console.log('mult =', calculator.mult());