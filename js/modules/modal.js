import {findItem} from '/js/modules/helpers.js';
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

export function detailButton(cart, products) {
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
