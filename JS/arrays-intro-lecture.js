(function(){
    "use strict";
   //number -5
   //string - "dog"
   //boolean - true/false
   //null - the absence of
   //undefined - data should exist, but doesn't
   //object ->

    // []

    // var myArr = ["dog","cat","fish"] //<- each comma-delimited value is called an "element"
    // console.log(Array.isArray(myArr));

    // var myCharacteristics = ["Casey" ,"Software Engineer", "31"];
    // console.log("The length is the array is: " + myCharacteristics.length);
    // console.log(`Hello, I am ${myCharacteristics[1]} named ${myCharacteristics[0]}`);

    // TODO: Make a new array which holds elements based on your own characteristics
//  -> In a console.log, output a string which describes yourself based on those elements
//  -> KEEP IN MIND ZERO-INDEXING!
//     var myCharacteristics = ["Wagner" ,"Chief", "27"];
    // console.log(`Hello, I the one they call ${myCharacteristics[0]} the ${myCharacteristics[1]}`);
    // myCharacteristics[0] += " Charles";
    // console.log(myCharacteristics[0]);

    // for (let i = 0; i < 10; i++){
    //     // do something with ONE array element
    //
    // }
    var myPets = ["Coda","Murphy","Honda", "Buddy"];
    for(let i = 0;i < myPets.length;i++){
        // console.log(myPets[i]);
    }
    myPets.forEach(function (pet){
        console.log("My pet's name is: " + pet);
    })


    // TODO: MINI-EXERCISE
//  -> Create an array with at least 5 elements, describing whatever you'd like!
//  -> Create a loop which will log each element to the console
//  -> Wrap that loop in a function which has an array parameter
//  -> Call the function and pass in your array as the argument
//  -> DID YOU KNOW: You can add different data types to an array??
//      -> Try adding strings, numbers, or booleans as elements
//     var cars = ["Toyota","Mercedes","Honda", "Buick"];
//     function myCars (){
//         for(let i = 0;i < myCars.length;i++){
//         }
//         }
//     console.log(myCars(cars))
})()

