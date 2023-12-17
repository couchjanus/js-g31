// commnt
'use strict';

import {populateProductList, addProductToCartButton} from '/js/modules/catalog.js';
import {Store} from '/js/modules/store.js';
import {detailButton} from '/js/modules/modal.js';

import {populateShoppingCart, renderCart} from '/js/modules/cart.js';
import {cartItemsAmount, fetchData} from '/js/modules/helpers.js';
import {populateCategories, renderCategory, renderShowOnly, renderSelect} from '/js/modules/categories.js';

import Footer from './components/footer.js';
customElements.define('footer-component', Footer);


import Divider from './components/divider.js';
customElements.define('divider-component', Divider);
import Breadcrumb from './components/breadcrumb.js';
customElements.define('breadcrumb-component', Breadcrumb);

import Services from './components/services.js';
customElements.define('services-component', Services);

import Login from './components/login.js';
customElements.define('login-component', Login);

import Contact from './components/contact.js';
customElements.define('contact-component', Contact);
import Carousel from './components/carousel.js';
customElements.define('carousel-component', Carousel);


let cart = [];
let wishlist = [];

function main() {

    cart = Store.init('basket');
    wishlist = Store.init('wishlist');
    cartItemsAmount(cart);
    const url = 'https://my-json-server.typicode.com/couchjanus/db/';
    const productContainer = document.querySelector('.product-container');

    fetchData(`${url}products`)
    .then(
        products => {
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
                    fetchData(`${url}categories`)
                    .then(categories => {
                        populateCategories(categoryContainer, categories);
                        renderCategory(productContainer, '#category-container', products, cart)
                    })
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
    );
    
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", main)
} else {
    main();
}