// FUNCTION TO FIND ID IN THE AVOCADO OBJECT ***
export function findById(itemS, id){
    for (let item of itemS){
        if (item.id === id)
            return item;
    }
}

//  FUNCTION TO CONVERT NUMBER TO US DOLLARS ***
export function toUSD(number) {
    return number.toLocaleString(
        'en-US', { style: 'currency', currency: 'USD' });

}


// FUNCTION TO CREATE A TABLE ROW IN CART

export function createTableRow(avocadoItem, cartItem){
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = avocadoItem.name;
    tr.appendChild(tdName);

    const tdPrice = document.createElement('td');
    tdPrice.textContent = toUSD(avocadoItem.price);
    tr.appendChild(tdPrice);

    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;
    tr.appendChild(tdQty);

    const tdTotal = document.createElement('td');
    const total = avocadoItem.price * cartItem.qty;
    tdTotal.textContent = toUSD(total);
    tr.appendChild(tdTotal);

    return tr;
}


// FUNCTION TO CALCULATE TOTAL DOLLARS IN CART ***
export function calcOrderTotal(avocados, cart) {
    let cartTotal = 0;
    for (let items of cart){
        const avocado = findById(avocados, items.id);
        cartTotal += avocado.price * items.qty;
    }
    return cartTotal;
}