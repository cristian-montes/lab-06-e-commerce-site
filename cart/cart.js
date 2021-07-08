import { findById, calcOrderTotal, createTableRow, toUSD } from '../utils.js';
import { getCart, clearCart } from '../storage-utils.js';

import avocadosInfo from '../data/dataAvocados.js';
// import cartInfo from '../data/dataCart.js';

// GET DOM ELEMENTS FROM CART.HTML

const tableBody = document.getElementById('table-body');


//RENDER THROUGH CART
function renderCart(){
    const cart = getCart();
    // Loop thruogh items in cart
    for (let cartItems of cart){
        const findAvocados = findById(avocadosInfo, cartItems.id);
        const tableRow = createTableRow(findAvocados, cartItems);
        tableBody.appendChild(tableRow);
    }
    if (cart.length === 0){
        tableBody.innerHTML = '';
    }
    const cartTotal = document.getElementById('order-total');
    const total = calcOrderTotal(avocadosInfo, cart);
    cartTotal.textContent = toUSD(total);
}

renderCart();


// EMPTY CART BUTTON EVENT LISTENER
const emptyBtn = document.getElementById('empty-btn');
emptyBtn.addEventListener('click', ()=>{
    clearCart();
    location.reload();
});

