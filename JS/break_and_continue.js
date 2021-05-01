// prompt("Give me a number any odd number between 1 and 50");

for(var i = 1; i < 50; i++) {

    if (i % 2 == 0) {
        // number isn't even
        // odd numbers aren't as cool
        // skip the rest of the loop and continue with the next iteration
        continue;
    }
}
    console.log(`Number to skip is: ${i}` );
    console.log('Here is a odd number: ' + i)

var numberToStopAt = 5;

for (var i = 1; i < 100; i++) {

    console.log('Loop counter is: ' + i);

    if (i === numberToStopAt) {
        console.log('Yikes! Skipping number: ' + i);
        // use the break keyword to exit from the while loop
        break;
        // nothing after the break will get processed
    }
}