export function renderAvocado(avocado){
    const avocadoLI = document.createElement('li');

    const nameh3 = document.createElement('h3');
    nameh3.textContent = avocado.name;

    const avocadoImg = document.createElement('img');
    avocadoImg.src = `./assets/${avocado.image}`;
    avocadoImg.alt = avocado.name;
    

    const descriptionh4 = document.createElement('h4');
    descriptionh4.textContent = `${avocado.description}`;

    const categorySpan = document.createElement('span');
    categorySpan.textContent = `${avocado.category}`;
    
    const priceSpan = document.createElement('span');
    priceSpan.textContent = `${avocado.price}`;

    const costSpan = document.createElement('span');
    costSpan.textContent = `${avocado.cost}`;

    const buttonAdd = document.createElement('button');
    buttonAdd.textContent = 'Add to Cart';

    avocadoLI.appendChild(nameh3);
    avocadoLI.appendChild(avocadoImg);
    avocadoLI.appendChild(descriptionh4);
    avocadoLI.appendChild(categorySpan);
    avocadoLI.appendChild(priceSpan);
    avocadoLI.appendChild(costSpan);
    avocadoLI.appendChild(buttonAdd);


    return avocadoLI;

}