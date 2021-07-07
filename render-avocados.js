export function renderAvocado(avocado){
    const avocadoLI = document.createElement('li');

    const nameh3 = document.createElement('h3');
    nameh3.textContent = avocado.name;

    const avocadoImg = document.createElement('img');
    avocadoImg.src = `./assets/${avocado.image}`;
    avocadoImg.alt = avocado.name;
    

    const descriptionh4 = document.createElement('h4');
    descriptionh4.textContent = `${avocado.description}`;

    const categoryp = document.createElement('p');
    categoryp.textContent = `Type : ${avocado.category}`;
    
    const pricep = document.createElement('p');
    pricep.textContent = `$${avocado.price}`;

    const costp = document.createElement('p');
    costp.textContent = `$${avocado.cost}`;

    const buttonAdd = document.createElement('button');
    buttonAdd.textContent = 'Add to Cart';

    avocadoLI.appendChild(nameh3);
    avocadoLI.appendChild(avocadoImg);
    avocadoLI.appendChild(descriptionh4);
    avocadoLI.appendChild(categoryp);
    avocadoLI.appendChild(pricep);
    avocadoLI.appendChild(costp);
    avocadoLI.appendChild(buttonAdd);


    return avocadoLI;

}