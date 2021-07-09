// import functions and grab DOM elements
import avocadosInfo from './data/dataAvocados.js';    // avocados array
import { renderAvocado } from './render-avocados.js';
import { addItemToCart } from './storage-utils.js';

// initialize state


const avocadoSection = document.getElementById('avocado-section');

// for of loop to go through the objects in the avocados object
for (let aV of avocadosInfo){
    const showAvocados = renderAvocado(aV);
    avocadoSection.appendChild(showAvocados);
}

// EVENT LISTENER TO THE ADD BUTTON 
const addBtns = document.querySelectorAll('.add');

for (let btn of addBtns){
    btn.addEventListener('click', (e)=> {
        const eTarget = e.target.value;
        addItemToCart(Number(eTarget));
    });
}
