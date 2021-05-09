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

// function getAverageItemPrice(shoppingCart1) {
//     let shoppingCart = shoppingCart1.items.reduce(function (acc, curr) {
//         return acc + curr.price / 5;
//     }, 0);
//     return (shoppingCart)
// }
//
// console.log(getAverageItemPrice(shoppingCart1))



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
//         avg += shop[i]/5;
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
//
let total = shoppingCart.items.reduce(function (acc, curr) {
    return acc + curr.quantity * curr.price /5;
},0);

console.log(total);