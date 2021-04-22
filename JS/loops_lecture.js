"use strict";

// // TODO: MINI EXERCISES
// // TODO: print all even numbers between 0 and 25;
// // TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the
// // correct password is given.
// hint: start by defining the correct password and don't forget to link your html file
//
// var numEven = 0;
// while (numEven <= 25) {
//     numEven += 2;
//    // if (numEven % 2 ===0){
//
//    } alert("Your number is: " + numEven);
// }
//
// var counter = 0; // starting point
//
// while(counter <= 25){
//     console.log(`starting num: ${counter}`);
//     if(counter % 2 === 0){
//         console.log(counter);
//     }
//     counter +=1;
// }
// // TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the correct password is given.

//
// var password = "OCHO";
// for (var i = 1; i <= 7; i++) {
//    prompt("What is the password")
//     if (i === password) {
//         alert("You my enter");
//         break;
//         // use the break keyword to exit from the while loop
//         // nothing after the break will get processed
//     }
// }
// // hint: start by defining the correct password and don't forget to link your html file

// var numberToStopAt = 5;
//
// for (var i = 1; i < 100; i++) {
//
//     console.log('Loop counter is: ' + i);
//
//     if (i === numberToStopAt) {
//         console.log('We have reached the stopping point: break!');
//         // use the break keyword to exit from the while loop
//         break;
//         // nothing after the break will get processed
//         console.log('You will never see this line.');
//     }
// }



//               {THIS IS A WHILE LOOP}
// var x;
//
// while (x !== "genie") {
//     x = prompt("What is your password")
//
//    } alert("OPEN SEASME!!");


//
// var pin = "play"
//
// var input = prompt("What is the password");
//
// while (input != pin){
//     alert("Wrong password");
//     input = prompt("Enter your password");
//
// }alert("Pin accepted");

//
// var amountOfStudents = 0 //starting point
//
// do {
//     var amountOfDeskAvailable = 20 - amountOfStudents;
//     console.log(`We have  ${amountOfDeskAvailable} amount of desks left!`);
//     amountOfStudents++;
// } while(amountOfStudents <= 20)
//
// console.log("Sorry, class if full");

// var age = 0 //starting point
//
// do {
//     age++;
//     console.log(`Happy Birthday you're now ${age} years old`);
// } while (age < 16)
//
// console.log("Sorry you're to old now");

// // TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that there are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.
// // HINT: think of a countdown, remember if statements can be used inside of your statements

// var spacesAvailable = 30; //starting point
// do {
//
//     console.log(`We have  ${spacesAvailable} amount of parking spaces left!`);
//     spacesAvailable = spacesAvailable - 2;
//     if (spacesAvailable === 0) {
//         console.log("This parking lot is now full")}
// }while (spacesAvailable >= 1)






// TODO: ICE SHOP

// This is how you get a random number between 50 and 100


var allCones = Math.floor(Math.random() * 50) + 50;
do {
    // This expression will generate a random number between 1 and 5
    var iNeed = Math.floor(Math.random() * 5) + 1;
    console.log(`${allCones} cones sold`);
    allCones = allCones - iNeed ;
     if (iNeed > allCones ) {
         console.log(`Cannot sell you ${iNeed}, I only have ${allCones} left`)
     // continue;
     }
    if (allCones === 0) {
        console.log("Yay! I sold them all")}
    }while (allCones >= 0)
