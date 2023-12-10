// commnt
'use strict';

import {populateProductList, addProductToCartButton} from '/js/modules/catalog.js';
import {Store} from '/js/modules/store.js';
import {detailButton} from '/js/modules/modal.js';

import {populateShoppingCart, renderCart} from '/js/modules/cart.js';
import {cartItemsAmount} from '/js/modules/helpers.js';
import {populateCategories, renderCategory, renderShowOnly, renderSelect} from '/js/modules/categories.js';


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

        const selectPicker = document.querySelector('.selectpicker');
        if(selectPicker) {
            renderSelect(selectPicker, products, productContainer, cart);
        }

        const categoryContainer = document.getElementById('category-container');

        if (categoryContainer) {
            populateCategories(categoryContainer, categories);
            renderCategory(productContainer, '#category-container', products, cart)
        }

        const showOnly = document.querySelector('.show-only');

        if (showOnly) {
            renderShowOnly(showOnly, products, productContainer);
        }
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