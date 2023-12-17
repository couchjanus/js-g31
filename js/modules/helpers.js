import {Store} from '/js/modules/store.js';
export const findItem = (items, id) => items.find(item => item.id == id);

export const filterItem = (items, id) => items.filter(item => item.id != id);

export function saveCart(cart) {
    Store.set('basket', cart);
    cartItemsAmount(cart);
}

export function cartItemsAmount(cart) {
    const  totalAmoutInCart = document.getElementById("total-amout-in-cart");

    if (+totalAmoutInCart.innerText > 0) {
        totalAmoutInCart.style.color = 'red';
    }
    totalAmoutInCart.innerText = cart.reduce((prev, cur)=>prev+cur.amount, 0);
}

export async function fetchData(url) {
    return await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if(response.status >= 400){ // 100 200 300 400 500
            return response.json()
            .then(err => {
                const error = new Error('Something went wrong.')
                error.data = err;
                throw error;
            }); 
        }
        return response.json();
    })
}