"use strict";
// TODO: Number 2
// for (var i = 1; i < 11; i++) {
//     console.log(`7 x ${i} = ${i*7}`);
// }
//
// function showMultiplicationTable(y) {
//     for (var i = 1; i <= 10; i++) {
//         var x = y * i
//         console.log(`${y} x ${i} = ${x}`);
//     }
// }
// showMultiplicationTable(3)
//
// function showMultiplicationTable(num){
//     for(let i = 1; i <= 10; i++){
//         console.log(` ${num} * ${i} = ${num * i}` );
//     }
// }
// showMultiplicationTable(7);

// TODO: Number 3
// Math.floor(Math.random() * 1) + 200 ;
// for(var i = 1; i < Math.floor(Math.random() * 200 - 20) + 180 ; i++) {
//
//     if (i % 2 !== 0) {
//
//         console.log(i + ' is odd');
//         continue;
//     }else{
//         console.log(i + ` is even `);
//
//     }
//
// }

// TODO: Number 4
// for(var i = 1 ; i >= 0; i -= 5) {
//     console.log(i)
// }
//
for(let i = 1; i <= 9; i++) {
    var numberFour = []
    for (let x = 1; x <= i; x++) {
        numberFour.push(i);
    }
    console.log(numberFour.join(""));
}

// function repeat() {
//     for (let i = 1; i <= 9; i++) {
//         console.log(i.toString().repeat(i));
//     }
// }
//
// console.log(repeat(2))
// TODO: Number 5
// for(var i = 100 ; i >= 0; i -= 5) {
//     console.log(i);
// }


// var carton = 0
// for(var eggs = 1; eggs <= 72; eggs++){
//     // console.log(`eggs: ` + eggs);
//     if (eggs % 12 == 0){
//         carton ++;
//         break;
//         console.log(`We've filled ${carton} amount of eggs cartoons with ${eggs} eggs`);
//
//     }
// }

// for(var i = 1; i <= 10; i++){
//     console.log(`first ${i}`)// console.log(`eggs: ` + eggs);
//     // continue;
//     i = i*2
//     console.log(`second ${i} `);
// }

// function countDown() {
//     for(let i = counter; i > 0; i--) {
//         console.log("second: " + i);
//     }
// }
// for(let i = 0; i <= 5; i++) {
//     console.log("first: " + i);
//     var counter = i;
//     if(i === 5) {
//         countDown();
//     }
// }

// TODO: Loop through a set of numbers (0-30), if the number you're currently at is even, add 2 to it. If it's an
//  odd number, print "odd"
// HINT: remember the remainder operator (modulo)

//     for(var i = 100 ; i >= 0; i--) {
//         console.log(i);
// }

// // TODO: loop through numbers 1 - 40. Print "marco" if it's divisible by 3. Print "polo" if it's divisible by 5.
//  If it's neither print "I'm not playing"
//  Print "marco polo" if it's divisible by 3 and 5.
//
// function divisibleByFive(){
//
// }
// function divisibleByThreeAndFive (){
//
// }
// for(var i = 0 ; i <= 40; i++) {
//     console.log(i);
//     if (divisibleByFive(i) ){
//         return
//     }
// }