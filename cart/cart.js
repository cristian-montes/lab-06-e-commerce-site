import { findById, calcOrderTotal, createTableRow, toUSD } from '../utils.js';
import avocadosInfo from '../data/dataAvocados.js';
import cartInfo from '../data/dataCart.js';

// GET DOM ELEMENTS FROM CART.HTML

const tableBody = document.getElementById('table-body');


// LOOP THRU ITMES IN DATA CART


for (let cartItems of cartInfo){
    const findAvocados = findById(avocadosInfo, cartItems.id);
    const tableRow = createTableRow(findAvocados, cartItems);
    tableBody.appendChild(tableRow);
}






const cartTotal = document.getElementById('order-total');
const total = calcOrderTotal(avocadosInfo, cartInfo);
cartTotal.textContent = toUSD(total);
