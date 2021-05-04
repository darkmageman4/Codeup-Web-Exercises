(function() {
    "use strict";

    // function last(x){
//     const lastItem = x[x.length - 1]
//     return lastItem
// }

// function last (x){
//     return x.slice(-1);
// };
//
// function secondToLast (x){
//     return x[x.length - 2];
// };
//
// function thirdToLast (x){
//     return x[x.length - 3];
// };
//
// function firstAndSecond (x){
//     return x.slice(0,2);
// };
//
//    function firstAndLast (x) {
//         return [x[0], x[x.length - 1]];
//     }
//
//     function firstToLast (x){
//         var a = x.shift();
//         x.push(a);
//         return x
//     }
//     function sumAll(x) {
//         var b = 0;
//         x.forEach(function (a) {
//             b += a;
//         });
//         return b;
//     }

    // function mean (x){
    // var b = 0;
    // x.forEach(function(a){
    // b += a
    // });
    // return b / x.length
    // }

    // function median (x) {
    //     var b = 0;
    //     x.forEach(function (a) {
    //         b += a
    //     });
    //     var average = b / x.length;
    //     return average.toFixed(0)
    // }

    // function median(x){
    //     if(x.length ===0) return 0;
    //
    //     x.sort(function(a,b){
    //         return a-b;
    //     });
    //
    //     var half = Math.floor(x.length / 2);
    //
    //     if (x.length % 2)
    //         return x[half];
    //
    //     return (x[half - 1] + x[half]) / 2.0;
    // }


    const books = [
        {
            "title": "Genetic Algorithms and Machine Learning for Programmers",
            "price": 36.99,
            "author": "Frances Buontempo"
        },
        {
            "title": "The Visual Display of Quantitative Information",
            "price": 38.00,
            "author": "Edward Tufte"
        },
        {
            "title": "Practical Object-Oriented Design",
            "author": "Sandi Metz",
            "price": 30.47
        },
        {
            "title": "Weapons of Math Destruction",
            "author": "Cathy O'Neil",
            "price": 17.44
        }
    ]

    function totalOfBookPrices(x){
        var a = 0;
        for (var i = 0; i < x.length; i ++){
            a += x[i].price;
        } return a;
    }


    // function highestPriceBook(x) {
    //     var a = {price: 0};
    //
    //     for (var x = 0; x < x.length; x++) {
    //         if (x[x].price > a.price) {
    //             a.price = x[x].price;
    //         }
    //     }return
    // }
    //
    // function highestPriceBook(x) {
    //     var spc = x.sort((a, b) => b.price - a.price);
    //     return books[0]}
    //
    // function lowestPriceBook(x) {
    //     return x.sort((a, b) => b.price - a.price);
    // return books[3]}
    //
    const shoppingCart = {
        "tax": .08,
        "items": [
            {
                "title": "orange juice",
                "price": 3.99,
                "quantity": 1
            },
            {
                "title": "rice",
                "price": 1.99,
                "quantity": 3
            },
            {
                "title": "beans",
                "price": 0.99,
                "quantity": 3
            },
            {
                "title": "chili sauce",
                "price": 2.99,
                "quantity": 1
            },
            {
                "title": "chocolate",
                "price": 0.75,
                "quantity": 9
            }
        ]
    }

    // function getTaxRate (){
    //     return shoppingCart.tax
    // }
    //
    // function numberOfItemTypes (){
    //     return Object.keys(shoppingCart.items).length
    // }

    // function totalNumberOfItems (){
    //     return Object.keys(shoppingCart.items).length
    // }

    // function totalOfBookPrices(x){
    //     var a = 0;
    //     for (var i = 0; i < x.length; i ++){
    //         a += x[i].price;
    //     } return a;
    // }
    // console.log(totalOfBookPrices(books))





    function totalNumberOfItems(x){
        var a = 0;
        for (var i = 0; i < x.length; i ++){
            a += x[i].quantity;
        }
        return a;
    }
    // console.log(totalNumberOfItems(shoppingCart))
    // console.log(totalNumberOfItems(shoppingCart.items))

})();


// Write a function named cube(n) that returns n * n * n
// Write a function named cubeRoot(n) that returns the cube root of the input

function cube(n){
   return n * n * n
}console.log(cube(3))

function cubeRoot(n){
    return Math.cbrt(n)
}console.log(cubeRoot(216))