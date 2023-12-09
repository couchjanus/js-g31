import {Store} from '/js/modules/store.js';

const productItemTemplate = product => `
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

export function populateProductList(products) {
    let result = '';
    for (const item of products) {
        result += productItemTemplate(item);
    }
    return result;
}

function addProductToCart(cart, product, amount=1){

    let inCart = cart.some(item => item.id === product.id);
    // console.log(inCart)
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
    // console.log(cart)
    Store.set('basket', cart);
}

export function addProductToCartButton(cart) {
    let addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(item => {
        item.addEventListener('click', (event) => {
            // console.log(item, event)
            let id = event.target.closest('.product').dataset.id;
            // console.log(id)
            addProductToCart(cart, {id: id});
        });
    });
    
}