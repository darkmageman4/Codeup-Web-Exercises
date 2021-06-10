(function() {
    'use strict';

    // TODO: MINI-EXERCISE
    // -> var days = ["Monday", "Tuesday", "Wednesday"];
//  -> Create an array with the remaining days of the week
//  -> Call .forEach() on that NEW array
//  -> Inside the inline function you pass into .forEach():
//      -> add the remainingDay of the week to the old array
//  -> When the loop completes, console.log() the completed day of the week array

//     function daysOfTheWeek(){
//     var days = ["Monday", "Tuesday", "Wednesday"];
//     var remainingDays = ['Thursday', 'Friday', 'Saturday', 'Sunday'];
//     days.push(remainingDays);
// // loop through the array and log the values
//     remainingDays.forEach(function(remainingDays) {
//         // console.log('Today is: ' + remainingDays + '.');
//     });
//    return days
//      }
//     console.log(daysOfTheWeek())
//         }

// TODO - MINI EXERCISE
//  -> Let's reverse engineer our days of the week array
//  -> Make sure to console.log in order to see your code's behavior!
//  -> Write a function which takes in your complete days of the week array
//      -> It will eventually return your reverse-engineered array
//  -> Using a FOR LOOP (not .forEach())
//      -> pop() each item off the days array
//      -> use the returned value from pop() to unshift the element
//      -> on to the new array
//  -> HINT: You may find that the loop doesn't behave as expected
//      -> console.log EVERY possible thing which could change as your loop runs
//          -> consider how the methods you are using change state of the array


    var days = ["Monday", "Tuesday", "Wednesday", 'Thursday', 'Friday'];

// var remainingDays = ['Thursday', 'Friday', 'Saturday', 'Sunday'];

    // function completeDays(oldArray) {
    //     var newArray = [];
    //     var oldArraylength = oldArray.length
    //     for (var i = 0; i < oldArray.length; i++) {
    //         var removedDays = oldArray.pop();
    //         newArray.unshift(removedDays)
    //         // console.log(newArray);
    //         // console.log('days left: ' + i);
    //         console.log(`This is my old array ${oldArray.length}`);
    //         console.log(i);
    //     }

        // console.log(oldArray);

    // }
    // completeDays(days);

})()