// commnt
'use strict';

const  totalAmoutInWishlist = document.getElementById("total-amout-in-wishlist");
const  totalAmoutInCart = document.getElementById("total-amout-in-cart");


let addToCartButtons = document.querySelectorAll('.add-to-cart');


let addToWishlistButtons = document.querySelectorAll('.add-to-wishlist');


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

let productItemTemplate = product => `
<div class="product" data-id="${product.id}">
            <div class="icons">
              <a href="#" class="fas fa-shopping-cart add-to-cart"></a>
              <a href="#" class="fas fa-heart add-to-wishlist"></a>
              <a href="#productView" class="fas fa-eye detail"></a>
            </div>
            <div class="image">
              <div class="badge text-white bg-${product.badge.bg}">${product.badge.title}</div>
              <img src="${product.image}">
            </div>

            <div class="content">
              <h3>${product.name}</h3>
              <div class="price">${product.price}</div>
            </div>
</div>
`;

const productContainer = document.querySelector('.product-container');

function populateProductList(products) {
    let result = '';
    for (const item of products) {
        result += productItemTemplate(item);
    }
    return result;
}

class Store 
{
    static init(key) {
        if(!Store.isset(key)) {
            Store.set(key, []); 
        }
        return Store.get(key);
    } 
    static set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static get(key) {
        let value = localStorage.getItem(key);
        return value === null ? null : JSON.parse(value);
    }

    static isset(key) {
        return this.get(key) !== null;
    }
}

let cart = [];
let wishlist = [];

const findItem = (items, id) => items.find(item => item.id == id);

function addProductToCart(product, amount=1){

    let inCart = cart.some(item => item.id === product.id);

    if (inCart) {
        cart.forEach(item => {
            if(item.id === product.id) {
                item.amount += amount;
            }
        })
    }else {
        let cartItem = {...product, amount: amount};
        cart = [...cart, cartItem];
    }

    Store.set('basket', cart);
}

function addProductToCartButton() {
    let addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(item => {
        item.addEventListener('click', (event) => {
            // console.log(item, event)
            let id = event.target.closest('.product').dataset.id;
            // console.log(id)
            addProductToCart({id: id});
        });
    });
    
}


const modalTemplate = (product) => `
<div class="modal" id="productView">
  <div class="modal-dialog">
    <a href="#!" title="Close" class="close fas fa-times"></a>
    <div class="modal-body">

      <aside><img src="${product.image}"></aside>

      <main>
        <div class="info-container">

          <div class="info-header"><h2>${product.name}</h2></div>

          <div class="info-price">${product.price}</div>
          <div class="info-shipping">Free shipping</div>
          
          <div class="info-button">
            <a href="#!" class="btn btn-submit"><i class="fas fa-cart-plus"></i> Add to Cart</a>
          </div>

          <div class="qty info-qty">
           <button class="btn btn-dec">-</button>
            
            <input 
                    type="number" 
                    value="1"
                    min="1"
                    max="10"
                    required 
                    />
                    <button class="btn btn-inc">+</button>
          </div>

          <div class="info-description">
          ${product.description} 
          </div>

        </div>
      </main>

    </div>
  </div>
</div>
`;

function renderModal(modalWindow, cart) {
    modalWindow.querySelector('.btn-inc').addEventListener('click', e => {
        let val = e.target.previousElementSibling.value;
        val++;
        e.target.previousElementSibling.value = val;
    })
    modalWindow.querySelector('.btn-dec').addEventListener('click', e => {
        let val = e.target.nextElementSibling.value;
        val--;
        e.target.nextElementSibling.value = val;
    })
}

function toggleModal(modalWindow, cart, param, product={}) {
    if (modalWindow.innerHTML=='') {
        modalWindow.innerHTML = modalTemplate(product);
        renderModal(modalWindow, cart)
    }else {
        modalWindow.innerHTML='';
    }
    modalWindow.style.display = param;
}

function detailButton() {
    const modalWindow = document.querySelector('.modal-window');
    let detailButtons = document.querySelectorAll('.detail');

    detailButtons.forEach(item => {
        item.addEventListener('click', event => {
            let id = event.target.closest('.product').dataset.id;
            let product = findItem(products, id);
            toggleModal(modalWindow, cart, 'block', product);

            modalWindow.querySelector('.close').addEventListener('click', event => {
                toggleModal(modalWindow, cart, 'none');
                
            })

        })
    })

}

function main() {

    cart = Store.init('basket');
    wishlist = Store.init('wishlist');

    productContainer.innerHTML = populateProductList(products);

    addProductToCartButton();
    detailButton();
}



if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", main)
} else {
    main();
}