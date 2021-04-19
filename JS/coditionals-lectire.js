// (function(){
//     "use strict"
//     function getToDestination(age, isInsured, hasCar, canGetRideshare){
//         var isLicensed = age >= 16;
//         var isLegalDriver = isLicensed && isInsured;
//         if (isLegalDriver && hasCar){
//             console.log("Let's get in and go!");
//         } else if(!isLegalDriver && canGetRideshare){
//             console.log("Let's call a rideshare!");
//         } else{
//             console.log("I think my friend can give us a lift!");
//         }
//     }

    // function canGetRideshare(driverNearBy, hasEnoughMoney, distanceFromPassenger){
    //     var driverNearBy = true;
    //     var hasEnoughMoney = 5.00;
    //     var distanceFromPassenger = 50;
    //     var getRideShare = true
    //     if (driverNearBy && hasEnoughMoney) {
    //         console.log("I have a ride just around the corner!");
    //     } else if (!hasEnoughMoney && distanceFromPassenger) {
    //         console.log("We have a ride coming just for you!");
    //     } else {
    //         console.log("Sorry, pal you are out of luck!");
    //     }
    //
    // } canGetRideshare(true, 6.00, 50);

function getHeartRateRange(){
    var age = 26;
    var heartRange;
    switch (age){

        case age >= 20 && age < 30:
            heartRange = "100-170";
            break;
        case age >= 30 && age < 35:
            heartRange = "95-162";
            break;
        case age >= 35 && age < 40:
            heartRange = "93-157";
            break;
        case age >= 40 && age < 45:
            heartRange = "90-153";
            break;
        case age >= 45 && age < 50:
            heartRange = "88-149";
            break;
        case age >= 50 && age < 55:
            heartRange = "83-140";
            break;
        case age >= 55 && age < 60:
            heartRange = "80-136";
            break;
        case age >= 60 && age < 65:
            heartRange = "78-132";
            break;
        case age >= 65 && age < 70:
            heartRange = "75-128";
            break;
        default:
            heartRange = "Age outside of range. Cannot determine ideal heart rate";
    }
    return heartRange;
}


function showHeartRateRange(heartRange){
    console.log("Your ideal heart rate range (in bpm) is: " + heartRange);
}

showHeartRateRange(getHeartRateRange());
//endregion