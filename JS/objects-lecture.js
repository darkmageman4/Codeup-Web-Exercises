// var aboutMe = new Object();
// // console.log(typeof aboutMe);
// // // aboutMe.height = "6,0";
// // // aboutMe.species = "Human";
// // // aboutMe.age = "26";
// // aboutMe['height'] = "6,0";
// // aboutMe['species'] = "Human";
// // aboutMe['age'] = "26";
// // console.log(aboutMe);
// //
// // var thisIsMe = {
// //     species: "Human",
// //     height: "6,0",
// //     age: "26",
// // };
// // console.log(thisIsMe);

// TODO: create an empty 'yourFaveSportsTeam' object using object literals
// TODO: let's add a 'city', 'coach', and 'sport' property to our 'team' object using dot
// TODO: let's add 'numOfPlayers', 'numOfChampsWon', and 'isBestTeam' properties to our same 'teams' object using bracket notation
// TODO: write a function that returns the sport and numOfPlayers from your 'team' object

// var Patriots = {
//     city: '';
//     coach: '';
//     sports: '';
// }

var patriots = new Object();
patriots.city = "New England";
patriots.coach = "Vince";
patriots.sports = "Football";

patriots['numOfPlayers'] = 32;
patriots['numOfChampsWon'] = 7;
patriots['isBestTeam'] = "true";

// console.log(patriots);

function details (){
    return ("The greatest sport is " + patriots.sports + " that have " + patriots.numOfPlayers + " players.");
    // patriots.sports + patriots.numOfPlayers
}

// console.log(details());

// function showObjProp(obj){
//     return [patriots.sports, patriots.numOfPlayers]
// }console.log(showObjProp())



var theSpurs = {
    city: "SA",
    coach: 'gregg',
    wins: 5,
    players: ["one", "two", "tim duncan", "manu", "david robinson"],
    playerInfo: [
        {
            name: "Tim",
            age: 40,
            mvp: 3
        },
        {
            name: "manu",
            age: 38,
            mvp: 6
        }
    ],
    otherNBATeams: {
        Jazz: {
            city: "Salt Lake City",
            mascot: "Jazz Bear",
            champsWon: 0
        },
        Mavs: {
            city: "Dallas",
            mascot: "MavsMan & Champ",
            champsWon: 1
        },
        Pistons: {
            city: "Detroit",
            mascot: "Hooper the Horse",
            champsWon: 3
        }
    }
}
//console.log(theSpurs.otherNBATeams.Mavs);
// console.log(theSpurs.playerInfo[0].age);
// console.log(theSpurs);
// TODO: using above nested object, log the mascot of the "otherNBATeams", change "manu's" name
//  from "manu" to "Ginobli", print out the 3rd element in the 'players' array, add another
//  'otherNBATeam' team object.

// console.log(theSpurs.otherNBATeams);
theSpurs.playerInfo.name = "Ginobli"
console.log(theSpurs.playerInfo.name);
console.log(theSpurs.players[2]);
theSpurs.otherNBATeams =


/** Mini Exercises */
/*  TODO: Create a zoo object that contains basic info about the zoo (name, city,
      isOpen, ranking, yearOpened), as
      well as, information about at least 5 different animals (think nested objects). For each
      Each animal must contain 3 identifiers (examples: hasFur, isMammal, animalSound, canFly,
       livingPlace). Each animal must also contain a method that returns the sound of that
        animal using the THIS keyword.
       hint: Each animal should have at least 5 properties (one of them being animalSound);
*/

var myZoo = {
    name: "Miami Zoo",
    city: "Miami",
    isOpen: true,
    ranking: "#1",
    yearOpened: "1994",
    animals: {
        Gorilla: {
                hasFur: true,
                isMammal: true,
                animalSound: 'N/a',
                canFly: false,
                livingPlace: "At DA Zoo",
        },
            Panda: {
                hasFur: true,
                isMammal: true,
                animalSound: 'N/a',
                canFly: false,
                livingPlace: "At DA Zoo",
            },
            Shark: {
                hasFur: true,
                isMammal: true,
                animalSound: 'N/a',
                canFly: false,
                livingPlace: "At DA Zoo",
                return animal.sound
            },
            Snake: {
                hasFur: false,
                isMammal: false,
                animalSound: 'N/a',
                canFly: false,
                livingPlace: "At DA Zoo",
            },
            Owl: {
                hasFur: true,
                isMammal: false,
                animalSound: 'N/a',
                canFly: true,
                livingPlace: "At DA Zoo",
            }

    }
};
// console.log(myZoo.)
// console.log(myZoo.animals.Gorilla);