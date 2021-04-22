"use strict";

// var numberToStopAt = 65536;
//
// for (var i = 2; i < 7000000; i *= 2) {
//
//     console.log('Loop counter is: ' + i);
//
//     if (i === numberToStopAt) {
//         console.log(`That's enough`);
//         // use the break keyword to exit from the while loop
//         break;
//         // nothing after the break will get processed
//         console.log('You will never see this line.');
//     }
// }

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;


var iceCreamCones = 65536;
var numberToStopAt = 65536;

 for (var i = 2; i < 7000000; i *= 2) {

     console.log('Loop counter is: ' + i);

     if (i === numberToStopAt) {
         console.log(`That's enough`);
         // use the break keyword to exit from the while loop
         break;
         // nothing after the break will get processed
         console.log('You will never see this line.');
     }
 }