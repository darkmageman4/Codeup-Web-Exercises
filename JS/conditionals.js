"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(color){
//     if (color === "blue"){
//         return "blue is the color of the sky";
//     } else if (color === "red")
//     {
//         return "Strawberries are red";
//     }
//     else if (color === "cyan")
//     {
//         return "I don't know anything about cyan";
//     }else {
//         return "I don't know that color bro!";
//     }
//
// }
//
// console.log(analyzeColor("blue"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// analyzeColor(randomColor);

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// function analyzeColor(color) {
//     switch (color) {
//         case "blue":
//             return "blue is the color of the sky";
//             break;
//         case "red":
//             return "Strawberries are red";
//             break;
//         default:
//             return " I don't know anything about that" + color;
//     }
// }
//
// console.log(analyzeColor( "red"));
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */
// function getColor() {
//     return prompt("What color?");
//
//     function theAlert() {
//         analyzeColor(getColor());
//         return getColor();
//     }
//     return
// }
// console.log(getColor("blue"));

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal (luckyNumber,discountedPrice){
//     var luckyNumber
//     var discountedPrice
//     switch (luckyNumbercdcd){
//         case 1:
//             alert("Your number is 0");
//             alert("You get no discount");
//             alert("Total amount is")
//             break;
//         case 2:
//             alert("Your number is 1");
//             alert("Your dicsount is 10%");
//             alert("");
//             break;
//         case 3:
//             alert("Your number is 2");
//             alert("Your dicsount is 25%");
//             alert("Your amount is ");
//             break;
//         case 4:
//             alert("Your number is 3");
//             alert("Your dicsount is 35%");
//             alert("Your amount is 50")
//             break;
//         case 5:
//             alert("Your number is 4");
//             alert("Your dicsount is 50%");
//             alert("Your amount is ");
//             break;
//         case 6:
//             alert("Your number is 5");
//             alert("Your discount is 100%");
//             alert("Your amount is ");
//             break;
//     } return (calculateTotal() + "dollars")
// }
// console.log(calculateTotal(5));

// function analyzeColor(color) {
//     switch (color) {
//         case "blue":
//             return "blue is the color of the sky";
//             break;
//         case "red":
//             return "Strawberries are red";
//             break;
//         default:
//             return " I don't know anything about that" + color;
//     }
// }
//
// console.log(analyzeColor( "red"));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

// function numberToCurrency(num1,num2){
//     var subtotal;
//     var discount;
// if(num1 === 0 )
// }
//
// function amountAfterDiscount(){
//     prompt("What is your total bill?");
//
// }
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
function conditions(x){
    var plus = x + 100
        confirm(`Would you like to enter a number?`)
    var x = prompt(`What's your number?`)
    if (x % 2 === 0) {
        return "even";
    }else{
        alert(`Your number is odd!`)
    };
    alert(`You number plus 100 is ${plus}.`);
    alert(`You number is also positive`);
    window.close
}
// console.log(conditions(4))