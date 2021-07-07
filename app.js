// import functions and grab DOM elements
import avocadosInfo from './data/avocados.js';    // avocados array
import { renderAvocado } from './render-avocados.js';

// initialize state


const avocadoSection = document.getElementById('avocado-section');

// for of loop to go through the objects in the avocados object
for (let aV of avocadosInfo){
    const showAvocados = renderAvocado(aV);
    avocadoSection.appendChild(showAvocados);
}