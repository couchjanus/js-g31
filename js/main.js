// commnt
'use strict';

/**
 * comments
 */
// console.dir(document.body.innerHTML)
// console.dir(document.title)
// console.dir(document.head)

// console.dir(document.body.nav)
// console.dir(document.body.navbar)

// let nav = document.getElementsByTagName('nav');
// console.dir(nav);

// let navbar = document.getElementById('navbar');
// console.dir(navbar);

// let navbars = document.getElementsByClassName('navbar')
// console.dir(navbars);

// let input = document.getElementsByName('inp')
// console.log(input)

// let div = document.querySelector('div')
// console.dir(div);

// let divs = document.querySelectorAll('div')
// console.dir(divs);

// let catalog = document.querySelectorAll('.catalog');
// console.dir(catalog)

// let catalog1 = document.querySelectorAll('#catalog');
// console.dir(catalog1)

// console.log(divs[80])

// for (let i=0; i<10; i++) {
//     console.log(divs[i])
// }


// for (let i=0; i<divs.length; i++) {
//     console.log(divs[i])
// }

const  totalAmoutInWishlist = document.getElementById("total-amout-in-wishlist");
console.dir(totalAmoutInWishlist)

// totalAmoutInWishlist.style.color = "red"

// totalAmoutInWishlist.innerText = 55

const  totalAmoutInCart = document.getElementById("total-amout-in-cart");
console.dir(totalAmoutInCart)

let addToCartButtons = document.querySelectorAll('.add-to-cart');
console.dir(addToCartButtons);

let addToWishlistButtons = document.querySelectorAll('.add-to-wishlist');
console.dir(addToWishlistButtons);

// addToCartButtons.forEach(function(button){
//     console.dir(button);
// });

// function counter() {
//     let value = +totalAmoutInWishlist.innerText; 
//     // parseInt()
//     return function(increment) {
//         value += increment;
//         totalAmoutInWishlist.innerText = value;
//         totalAmoutInWishlist.style.color = "red";
//     }
// }
// let totalInWishlist = counter();

function counter(total) {
    let value = +total.innerText; 

    return function(increment) {
        value += increment;
        total.innerText = value;
        total.style.color = "red";
    }
}

let totalInWishlist = counter(totalAmoutInWishlist);
let totalInCart = counter(totalAmoutInCart);

let products = document.querySelectorAll('.product');
console.dir("products = ", products);

if (products.length >= 1) {

console.dir(products);

products.forEach(function(product){
    // console.log(product.querySelector('h3').innerText);
    // console.log(product.querySelector('.price').innerText);
    // console.log(product.querySelector('.add-to-cart'));
    product.querySelector('.add-to-cart').addEventListener('click', function() {
        console.log(product.querySelector('h3').innerText);
        console.log(product.querySelector('.price').innerText);
        totalInCart(1);
    })
});

// products.forEach(function(product){
    
//     product.querySelector('.add-to-wishlist').addEventListener('click', function() {
//         console.log(product.querySelector('h3').innerText);
//         console.log(product.querySelector('.price').innerText);
//         totalInWishlist(1);
//     })
// });

products.forEach(product => {
    
    product.querySelector('.add-to-wishlist').addEventListener('click', () => {
        console.log(product.querySelector('h3').innerText);
        console.log(product.querySelector('.price').innerText);
        totalInWishlist(1);
    });
});
}
// console.log(parseInt(totalAmoutInWishlist.innerText))

function main() {
    console.log("DOM loaded")
}

document.addEventListener("DOMContentLoaded", () => {

});

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", main)
} else {
    main();
}