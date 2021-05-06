// function getSquare() {
// if (parseInt(x) !== 1 ){
//     return x * x;
// }else
//     return false
// }

// function getSquare(x){
//     var a = Math.pow(x,2)
//     if(isNaN(a) || (x === null)){
//         return false
//     }else
//         return a
// }console.log(getSquare(null))

// function getReverse(x) {
//     if ( x !== "string"){
//         return x
//     }    else
//         return false
// }console.log(getReverse("Monday"))


    function multiplySquare(a,b) {
        var first = Math.pow(a,2)
        var second = Math.pow(b,2)
        if (parseInt(a) !== 1 || parseInt(b) !== 1 || isNaN(a) || (a === null)) {
            return first * second
        }else
            return false
    }console.log(multiplySquare(null, 3))

// function addTo(x){
//     var base = parseInt(x)
//     if (isNaN(base) || (x === null)) {
//         return false
//     }else
//         return base + 3
// }
// console.log(addTo())

// function subtractFrom(x){
//         if(isNaN(x) || (x === null)){
//         return false
//     }else
//         return x - 3
// }
// console.log(subtractFrom("they"))

// function getLowestNumber(a,b,c) {
//     var georgiee = Math.min([a, b, c])
//     if (parseInt(georgiee) !== 1 ){
//         return georgiee
//     }else
//         return false
// }
// console.log(getLowestNumber(1,3,5));

// function isAString(x){
//     if (x !== "string"){
//         return true
//     }else
//         return false
// }console.log(isAString("play"))

function last(input){
    // if (toString(input) !== 0) {
    //     return input.substr(-1)
    // }else
    //     return false

// return input.charAt(input.length -1)

        // return input.substr(-1)
        // return input.slice(-1);

}

console.log(last("hello"))