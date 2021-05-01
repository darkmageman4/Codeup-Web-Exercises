// (function() {
    "use strict";
// var numberToStopAt = 65536;
// for (var i = 2; i < 7000000; i *= 2) {
//     console.log('Loop counter is: ' + i);
//     if (i === numberToStopAt) {
//         console.log(`That's enough`);
//         // use the break keyword to exit from the while loop
//         break;
//         // nothing after the break will get processed
//         console.log('You will never see this line.');
//     }
// }

// This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;
var iceCreamCones = 65536;
var numberToStopAt = 65536;

// function showMultiplicationTable() {
//
//     var counter = 0; // starting point
//
//     while (counter <= 10) {
//         console.log(`starting num: ${counter}`);
//         if (counter % 2 === 0) {
//             console.log(counter);
//         }
//         counter += 1;
//     }
//}


// function showMultiplicationTable() {

//
// var counter = 0; // starting point
// while (counter <= 10) {
//     console.log(counter);
//     if (counter % 7 === 0) {
//         // console.log("7 x " + counter + " =" + console.log(`starting num: &{counter});`);
//                 console.log(`starting num: ${counter}`);
//     }
//     counter += 1;
// }
var allCones = Math.floor(Math.random() * 50) + 50;
Math.floor(Math.random() * 5) + 1;

   function getStartingCones(){
       return  Math.floor(Math.random() * 50) + 50;
   }
    function getWantedCones(){
        return Math.floor(Math.random() * 5) + 1;
    }
    function sellIceCreamCones() {
        do {
            var wantedCones = getWantedCones();
            if (wantedCones < getStartingCones()) {
               return console.log("I'm sorry, you wanted " + wantedCones + " cones, but we only have " + allCones)
                continue;
            }
            return console.log(`${wantedCones} cones sold`);
            getStartingCones() -= wantedCones;
           return console.log(`Cannot sell you 6 cones I only have ${allCones}`);
        } while (allCones > 0)
        console.log(`Yay! I sold them all`);
    }

        sellIceCreamCones(getStartingCones())

    // })()