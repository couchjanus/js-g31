// commnt
'use strict';

import {populateProductList, addProductToCartButton} from '/js/modules/catalog.js';
import {Store} from '/js/modules/store.js';
import {detailButton} from '/js/modules/modal.js';

import {populateShoppingCart, renderCart} from '/js/modules/cart.js';
import {cartItemsAmount} from '/js/modules/helpers.js';

// const  totalAmoutInWishlist = document.getElementById("total-amout-in-wishlist");


// let addToCartButtons = document.querySelectorAll('.add-to-cart');


// let addToWishlistButtons = document.querySelectorAll('.add-to-wishlist');


// function counter(total) {
//     let value = +total.innerText; 

//     return function(increment) {
//         value += increment;
//         total.innerText = value;
//         total.style.color = "red";
//     }
// }

// let totalInWishlist = counter(totalAmoutInWishlist);
// let totalInCart = counter(totalAmoutInCart);


let cart = [];
let wishlist = [];

function main() {

    cart = Store.init('basket');
    wishlist = Store.init('wishlist');
    cartItemsAmount(cart);
    const productContainer = document.querySelector('.product-container');
    if (productContainer) {
        productContainer.innerHTML = populateProductList(products);

        addProductToCartButton(cart);
        detailButton(cart, products);
    }
    

    const cartPage = document.getElementById('cart-page');
    
    if (cartPage)
    {
        const cartItems = cartPage.querySelector('.cart-items');

        cartItems.innerHTML = populateShoppingCart(cart, products);
        renderCart(cartItems, cart);
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", main)
} else {
    main();
}