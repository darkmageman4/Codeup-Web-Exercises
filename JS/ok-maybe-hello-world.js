"use strict";

alert("I swear I won't make you see 'hello world'");

alert("I hope my dogs don't get out again :/ ");

// TODO:The dog ran upstairs
//  To go get the owners shoe
//  To give to the cat

alert("The dog ran upstairs" +
    "To go get the owners shoe" +
    "To give to the cat");

//CONFIRM

var userChoice = confirm("Would you like to continue");

if.(userChoice){
    console.log("Let's continue");
}else{
    console.log("Alright, be like that..");
}

//PROMPT

var userInput = prompt(message:"What is your favorite movie?").toUpperCase();
if(userInput === "The Room".toUpperCase()){
    alert("Oh, Hi Mark.");
}else{
    alert("You chose: "+ userInput);
}

