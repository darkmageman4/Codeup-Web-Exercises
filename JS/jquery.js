"use strict";

// $(document).ready(function () {
//     alert($("#growOnTrees").text());
// });

// $(document).ready(function() {
//     alert( 'The DOM has finished loading!' );
// });

// $(".codeup").css('background-color', '#FFC0CB',"1px");

// $("li").css('font-size', "20px");

// $(document).ready(function(){
//     alert($("h1").text())
// });

// $(document).ready(function(){
//     alert($("h1").html())
// });

// $("h1"[,"p"[,"li"]])

// $(document).ready(function (){
//     $("h1,p,li").css('background-color', '#FFC0CB',"1px");
// });

// $("h1").click(function (){
//     alert("STOP CLICKING ME!!!!");
//     $(this).css('background-color', '#FF0');
// });
//
// $("p").dblclick(function(){
//     alert("NOW LOOK AT WHAT YOU'VE DONE");
//     $(this).css("font-size","18px");
// });
//
// $("li").hover(
//     function (){
//     // alert("AHHHH!!!!!!");
//     $(this).css('color', 'red');
// },
//     function(){
//         $(this).css('color', 'white');
//     });

// var str = "";
// var konamikeys = [38,38,40,40,37,39,37,39,66,65],
//
//
//     $(document).keyup(function(event){
//     str += event.keyCode;
//     if(input.indexOf(konamikeys) !== -1){
//         fn();
//         str = "";
//     }
// });

var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b',
}
// the 'official' Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
    // get the value of the key code from the key map
    var key = allowedKeys[e.keyCode];
    // get the value of the required key from the konami code
    var requiredKey = konamiCode[konamiCodePosition];

    // compare the key with the required key
    if (key == requiredKey) {

        // move to the next key in the konami code sequence
        konamiCodePosition++;

        // if the last key is reached, activate cheats
        if (konamiCodePosition == konamiCode.length) {
            activateCheats();
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});

function activateCheats() {
    // var up = document.getElementById('GFG_UP');
    // up.innerHTML = "Click on the button to add image element";
    // var down = document.getElementById('this-is-it');
    var img = new Image();
    img.src = "kodak/konami-games.jpg"
    document.getElementById('this-is-it').appendChild(img);
    // down.innerHTML = "Image Element Added.";
    var audio = new Audio('kodak/wolves.mp3');
    // $('audio#music'.play()
    audio.play();
    alert("Konami Code Activate!");
// document.body.style.backgroundImage = "('kodak/konami-games.jpg')";
}

// $(document).ready(function() {
//     alert( 'The DOM has finished loading!' );
// });