'use strict';
const user = {}
user.userName = 'Ivanna';
user.age = 15;
user.greet = function () {
    return this.userName
};
user.updateAge = function () {
    this.age += 1
    return this.age
};

console.log(user);
console.log(user.greet());
console.log(user.updateAge());
console.log(user.updateAge());
console.log(user.updateAge());
 