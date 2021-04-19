"use strict";

function getKindOfDog(){
    return prompt("What kind of dog is it?");
}

console.log(getKindOfDog());

function getContactInfo(){
    return prompt("How do I contact you when I find the dog?");
}

console.log(getContactInfo());

function getDogName(){
    return prompt("What is your dog's name?");

    console.log(getContactInfo());

    function playTheGreatEscape (){
        var dogKind = getKindOfDog()
        var dogName = getDogName()
        var contactinfo = getContactInfo()
        //start searching
        alert("Time to search for this doggo!");

        //see the dog
        alert("I see a dog");

        var KindOfDogSeen = getKindOfDog();

        var isTheLostDog = kindOfDogSeen === dogKind && confirm("Does dog respond to the name" + dogName);

        if(isTheLostDog){
                alert("Puts leash on" + dogName);
                alert("Time to call the owner!");
                alert("Calling: " + contactInfor);
                alert("Taking dog to owner");
            }
        }
    }

}

playTheGreatEscape();