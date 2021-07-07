// FUNCTION TO FIND ID IN THE AVOCADO OBJECT
export function findById(itemS, id){
    for (let item of itemS){
        if (item.id === id)
            return item;
    }
}

// FUNCTION TO CALCULATE TOTAL DOLLARS IN CART
export function calcItemTotal(avocados, cart) {
    let cartTotal = 0;
    for (let items of cart){
        const avocado = findById(avocados, items.id);
        cartTotal += avocado.price * items.qty;
    }
    return cartTotal;
}