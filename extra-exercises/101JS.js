// (function () {


const shoppingCart = {
    tax: .08,
    items: [
        {
            title: "orange juice",
            price: 3.99,
            quantity: 1
        },
        {
            title: "rice",
            price: 1.99,
            quantity: 3
        },
        {
            title: "beans",
            price: 0.99,
            quantity: 3
        },
        {
            title: "chili sauce",
            price: 2.99,
            quantity: 1
        },
        {
            title: "chocolate",
            price: 0.75,
            quantity: 9
        }
    ]
}

function getAverageItemPrice1(shoppingCart) {
    let jungleJuice = shoppingCart.items.reduce(function (acc, curr) {
        return acc + curr.price / 5;
    }, 0);
    return (jungleJuice)
}

// console.log(getAverageItemPrice1(shoppingCart))


// function getAverageItemPrice() {
//     let shop = [shoppingCart.items[0].price,
//         shoppingCart.items[1].price,
//         shoppingCart.items[2].price,
//         shoppingCart.items[3].price,
//         shoppingCart.items[4].price];
//
//     let avg = 0;
//
//     for (let i = 0; i < shop.length; i++) {
//         avg += shop[i] / 5;
//     }
//     return avg
// }
//
// console.log(getAverageItemPrice(shoppingCart))

// let shoppingCart = [{
//     product: 'phone',
//     qty: 1,
//     price: 699
// },
//     {
//         product: 'Screen Protector',
//         qty: 1,
//         price: 9.98
//     },
//     {
//         product: 'Memory Card',
//         qty: 2,
//         price: 20.99
//     }
// ];

let total = shoppingCart.items.reduce(function (acc, curr) {
    return acc + curr.quantity * curr.price / 5;
}, 0);

// console.log(total);
//TODO: // Write a function named getAverageSpentPerItem that takes in the shopping cart and returns the average of summing each item's quanties times that item's
// price. Hint: You may need to set an initial total price and total total quantity to zero, then sum up and divide that total price by the total quantity


function getAverageSpentPerItem(cart) {
    var totalPrice = 0;
    var totalQuantity = 0;
    for (var i = 0; i < shoppingCart.items.length; i++) {
        totalPrice =
            totalPrice + shoppingCart.items[i].price * shoppingCart.items[i].quantity;
        totalQuantity = totalQuantity + shoppingCart.items[i].quantity;
    }
    return totalPrice / totalQuantity;
}

console.log(getAverageSpentPerItem(shoppingCart))
// });

function mostSpentOnItem() {
    var compareProductOfItem = 0;
    var indexOf = 0;
    for (var i = 0; i < shoppingCart.items.length; i++) {
        if (
            shoppingCart.items[i].price * shoppingCart.items[i].quantity >
            compareProductOfItem
        ) {
            compareProductOfItem =
                shoppingCart.items[i].price * shoppingCart.items[i].quantity;
            indexOf = i;
        }
    }
    return shoppingCart.items[indexOf];
}

console.log(mostSpentOnItem(shoppingCart))