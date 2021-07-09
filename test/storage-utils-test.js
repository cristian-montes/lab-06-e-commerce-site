import { addItemToCart, getCart,clearCart } from '../storage-utils.js';
import { CART } from '../storage-utils.js';


const test = QUnit.test;


// TEST FOR GETCART FUNCTION

test('getCart return the shopping cart from localStorage as object', (expect) => {
    // ARRANGE
    const testCart = [
        { id: 1, qty: 2 },
        { id: 6, qty: 3 },
    ];
    const testCartString = JSON.stringify(testCart);
    localStorage.setItem(CART, testCartString);

    const cart = getCart();

    expect.deepEqual(cart, testCart);
});

test('getCart return EMPTYARRAy if notthing in cart', (expect) => {
    // ARRANGE
    const testCart = [];
    const testCartString = JSON.stringify(testCart);
    localStorage.setItem(CART, testCartString);

    const cart = getCart();

    expect.deepEqual(cart, testCart);
});



// TEST FOR ADDITEMTOCART FUNCTION

test('addItemToCart return Updated qty if item in cart', (expect) => {
    // ARRANGE
    const testCart = [
        { id: 1, qty: 2 },
        { id: 6, qty: 3 },
    ];
    const testCartString = JSON.stringify(testCart);
    localStorage.setItem(CART, testCartString);

    addItemToCart(1);
    const newCart = getCart();

    const expected = [
        { id: 1, qty: 3 },
        { id: 6, qty: 3 },
    ];

    expect.deepEqual(newCart, expected);
});

test('addItemToCart to add item if not in cart', (expect) => {
    // ARRANGE
    const testCart = [
        { id: 1, qty: 2 },
        { id: 6, qty: 3 },
    ];
    const testCartString = JSON.stringify(testCart);
    localStorage.setItem(CART, testCartString);

    addItemToCart(3);
    const newCart = getCart();

    const expected = [
        { id: 1, qty: 2 },
        { id: 6, qty: 3 },
        { id: 3, qty: 1 },
    ];

    expect.deepEqual(newCart, expected);
});

// TEST FOR ADDITEMTOCART FUNCTION

test('clearCart should delete from localStorage', (expect) => {
    // ARRANGE
    const testCart = [
        { id: 1, qty: 2 },
        { id: 6, qty: 3 },
    ];
    const testCartString = JSON.stringify(testCart);
    localStorage.setItem(CART, testCartString);

    clearCart();

    const expected = [];
    const cart = getCart();

    expect.deepEqual(cart, expected);
});