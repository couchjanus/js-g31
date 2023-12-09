// cart module
import {findItem, filterItem, saveCart} from '/js/modules/helpers.js';

const cartItemTemplate = (item, product) => `
<tr class="caet-item" id="id${product.id}">
    <td class="py-3 align-middle">
        <a class="reset-anchor d-block" href="detail.html"><img src="${product.image}" alt="${product.name}" width="40"></a>
    </td>
    <td class="py-3 align-middle">                      
        <strong><a class="reset-anchor" href="detail.html">${product.name}</a></strong>
    </td>
    <td class="p-3 align-middle">
        <p class="mb-0 small">$<span class="product-price">${product.price}</span></p>
    </td>
                        
    <td class="p-3 align-middle">
        <div class="quantity" data-id="${product.id}">
            <button class="btn btn-dec">-</button>
            <input type="text" value="${item.amount}">
            <button class="btn btn-inc">+</button>
        </div>
    </td>
    <td class="p-3 align-middle"><p>$<span class="product-subtotal">250</span></p></td>
        <td class="p-3 align-middle"><a class="reset-anchor remove" href="#!"><i class="fas fa-trash-alt small text-muted" data-id="${product.id}"></i></a>
    </td>
</tr>
`

export function populateShoppingCart(cart, products) {
    let result = '';
    cart.forEach(item => {
        result += cartItemTemplate(item, findItem(products, item.id));
    });
    
    return result;
}

function setCartTotal(cartItems, cart) {
    let tmpTotal = 0;
    let subTotal = 0;

    cart.map(item => {
        let price = cartItems.querySelector(`#id${item.id} .product-price`).textContent;
        tmpTotal = +price * item.amount;
        cartItems.querySelector(`#id${item.id} .product-subtotal`).textContent = parseFloat(tmpTotal.toFixed(2));
        subTotal += parseFloat(tmpTotal.toFixed(2));
    });
    let cartTax = (subTotal * .07).toFixed(2);

    document.querySelector('.cart-subtotal').textContent = subTotal;
    document.querySelector('.cart-tax').textContent = cartTax;
    document.querySelector('.cart-total').textContent = +subTotal + +cartTax;
}

export function renderCart(cartItems, cart) {
    setCartTotal(cartItems, cart);
    cartItems.addEventListener('click', event => {
        if(event.target.classList.contains('fa-trash-alt')) {
            cart = filterItem(cart, event.target.dataset.id);
            setCartTotal(cartItems, cart);
            saveCart(cart);
            event.target.closest('.caet-item').remove();

        } else if(event.target.classList.contains('btn-inc')) {
            let tmp  = findItem(cart, event.target.closest('.quantity').dataset.id);
            tmp.amount += 1;
            event.target.previousElementSibling.value = tmp.amount;
            setCartTotal(cartItems, cart)
            saveCart(cart);
        }else if(event.target.classList.contains('btn-dec')) {
            let tmp  = findItem(cart, event.target.closest('.quantity').dataset.id);
            if (tmp !== undefined && tmp.amount > 1) {
                tmp.amount -= 1;
                event.target.nextElementSibling.value = tmp.amount;
    
            }else{
                cart = filterItem(cart, event.target.dataset.id);
                
                event.target.closest('.caet-item').remove();
            }
            setCartTotal(cartItems, cart)
            saveCart(cart);
        }
    })
}