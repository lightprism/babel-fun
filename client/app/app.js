'use strict';

var utils = require('./js');
var Square = require('./square');

console.log('Client side code started');

var square1 = new Square(5);
var square2 = new Square();
console.log(square1, square2);
console.log(square1.sayName());
