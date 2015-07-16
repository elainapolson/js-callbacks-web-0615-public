'use strict';

var addNums = function(num1, num2){
  return num1 + num2
}

var subtractNums = function(num1, num2){
  return num1 - num2
}

var calculate = function(num1, num2, callback) {
  return callback(num1, num2)
}

// Write a function called calculate that takes in three arguments – num1, num2, and callback – and executes the callback function on the two numbers.