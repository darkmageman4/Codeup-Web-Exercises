"use strict";

// var num = 5;
//
// num = num + 5;

//Creating an interface for other code to use without knowing what happens inside add() returns the results of adding num1 and num2 together
// function add(num1, num2, num3) { // <-parameters here
//     return num1 + num2 + num3;
// }

// console.log("The result of add() is: " + add(10, 10, 10)) // <- argument here
//
// var myNum = 12;
// var myNum2 = 21
//
// console.log("The result of add() is: " + add(10, 10, 10)) // <- argument here

//Returns the difference of subtracting num2 from num1
// function subtract(num1, num2){
//     return num1 - num2;
// }
//
// console.log("The result of subtract is: " + subtract( 10, 2));

// MINI EXERCISE
// TODO: Create functions which will return the product (*) of two numbers and the dividend (/) of two numbers, respectively
// function product (clone , doggie){
//     return clone * doggie
// }
// console.log("The answer is: " + product(10, 10));
//
// function quotient (clone , doggie){
//     return clone / doggie
// }
// console.log("The answer is: " + quotient(3, 3));
//
// function addWithDefaults (num1 = 0, num2){
//     return num1 + num2;
// }
//
// console.log((addWithDefaults(2)));

var number2 = 10;

function scopingFun(){
    var number = 2;
    console.log(number + number2);
}

scopingFun();