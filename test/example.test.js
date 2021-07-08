// IMPORT MODULES under test here:
import { renderAvocado } from '../render-avocados.js';
import { findById, calcOrderTotal, createTableRow, calcItemTotal } from '../utils.js';
import avocadosInfo from '../data/dataAvocados.js';


const test = QUnit.test;






// TESTING RENDERAVOCADO FUNCTION

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
    const expected = `<li><h3>hass avocado</h3><img src="./assets/hass-avocado.jpeg" alt="hass avocado"><h4>Creamy flesh, perfect size avocado for any dish</h4><p>Type : tree-fruit</p><p>$2</p><p>$0.5</p><button>Add to Cart</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderAvocado(avocado2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);    // NOTE: .outerHTML had to be ued on actual to compare apples to apples ... since expected is .outterHTML
});







// TESTING FINDID FUNCTION

test('test function findID for tacos', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const tacos = [{ id: 1, name: 'alpastor' }, { id: 2, name: 'asada' }];
    const expected = { id: 2, name: 'asada' };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(tacos, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);    
});

test('test function findID for avocadosInfo', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        id: 2,
        name: 'hass avocado',
        image: 'hass-avocado.jpeg',
        description: 'Creamy flesh, perfect size avocado for any dish',
        category: 'tree-fruit',
        price: 2.00,
        cost: 0.50
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(avocadosInfo, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);    
});










// TESTING CALCODER TOTAL FUNCTION
test('test function calcItemTotal', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const cart = [
        { id: 1, qty: 6 }, 
        { id: 3, qty: 9 }
    ];

    const data = [{ 
        id: 1, 
        price: 2 }, 
    { id: 3, price: 2 }
    ];


    const expected = 30 ;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcOrderTotal(data, cart);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(expected, actual);    
});

// TESTING  CREATE A TABLE ROW FUNCTION

test('test function renderAvocado for avocado2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const avocado2 = {
        id: '2',
        name: 'hass avocado',
        image: 'hass-avocado.jpeg',
        description: 'Creamy flesh, perfect size avocado for any dish',
        category: 'tree-fruit',
        price: 2.00,
        cost: 0.50
    };

    const avocadoCar = {
        id: 2,
        qty: 2
    };
    const expected = `<tr><td>hass avocado</td><td>$2.00</td><td>2</td><td>$4.00</td></tr>`;
    const dom = createTableRow(avocado2, avocadoCar);
    const html = dom.outerHTML;
    
    //Act 
    // Call the function you're testing and set the result to a const

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(html, expected);    // NOTE: .outerHTML had to be ued on actual to compare apples to apples ... since expected is .outterHTML
});




// // TESTING FINDID FUNCTION

// test('test CLACLITEMTOTALs', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const cart = [
//         { id: 1, qty: 6 }, 
//         { id: 3, qty: 9 }
//     ];

//     const data = [{ 
//         id: 1, 
//         price: 2 }, 
//     { id: 3, price: 2 }
//     ];


//     const expected = 30 ;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = calcItemTotal(data, cart);

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.deepEqual(actual, expected);    
// });
