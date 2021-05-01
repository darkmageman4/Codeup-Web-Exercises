(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,
        circumference: 18.84
    };

      //  getArea:
            function getArea (a,b) {
            // TODO: complete this method
            // hint: area = pi * radius^2
                var a
                var b
                var mathPow = Math.pow(a,b)
            return Math.PI * mathPow ; // TODO: return the proper value
        }
    console.log(getArea(2,3))

        //logInfo:
            function round (doRounding) {
            // TODO: complete this method.
              return  Math.round(getArea(3,2))
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: ");
        }


    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
circle.radius=5
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();