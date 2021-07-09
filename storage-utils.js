import { findById } from './utils.js';

export const CART = 'CARRITO-TITO';

// GETCART FUNCTION
export function getCart(){
    let stringsCart = localStorage.getItem(CART) || '[]'; //get obj from LS, else returns [].
    const objCart = JSON.parse(stringsCart);
    return objCart;
}

// ADDITEMTOCART FUNCTION
export function addItemToCart(itemId){
    const cart = getCart();
    const item = findById(cart, itemId);

    if (item){
        item.qty += 1;
    } else {
        const newItem = { id: itemId, qty: 1 };
        cart.push(newItem);
    }

    localStorage.setItem(CART, JSON.stringify(cart));
}


// CLEAR CART FUNCTION
export function clearCart(){
    localStorage.removeItem(CART);
}