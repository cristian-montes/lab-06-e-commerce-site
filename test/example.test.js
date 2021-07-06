// IMPORT MODULES under test here:
import { renderAvocado } from '../render-avocados.js';

const test = QUnit.test;

test('test function renderAvocado for avocado2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const avocado2 = {
        id: 'avocado2',
        name: 'hass avocado',
        image: 'hass-avocado.jpeg',
        description: 'Creamy flesh, perfect size avocado for any dish',
        category: 'tree-fruit',
        price: 2.00,
        cost: 0.50
    };
    const expected = `<li><h3>hass avocado</h3><img src="./assets/hass-avocado.jpeg" alt="hass avocado"><h4>Creamy flesh, perfect size avocado for any dish</h4><span>tree-fruit</span><span>2</span><span>0.5</span><button>Add to Cart</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderAvocado(avocado2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);    // NOTE: .outerHTML had to be ued on actual to compare apples to apples ... since expected is .outterHTML
});
