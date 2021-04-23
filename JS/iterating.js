(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
var name = ['My','Name','Is','Wagner']
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    var name = ['My','Name','Is','Wagner']
    console.log(name.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(name[0]);
    console.log(name[1]);
    console.log(name[2]);
    console.log(name[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (var i = 0; i < name.length; i++) {
        console.log('Cool Guy ' + i + ' is: ' + name[i]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    name.forEach(function(name) {
        console.log(`You are a Cool Guy! ${name} .`);
    })
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
        console.log(name[2]);
    var fruit = ["Banana", "Grape", "Apple" , "Orange", "5th Fruit",];
        console.log(fruit[3]);
    var sports = ["Golf", "Fletching", "Falconery", "Archery", "Polo"];
    console.log(sports[4]);

})();

