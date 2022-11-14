const pizzas = [
    {
        nombre: 'Marinara',
        ingredientes: ['Salsa', 'Orégano', 'Ajo', 'Aceite de Oliva', 'Albahaca', 'Sal'],
        id: 1,
        precio: 900,
    },
    {
        nombre: 'Napolitana',
        ingredientes: ['Salsa', 'Queso', 'Jamón', 'Huevo', 'Sal'],
        id: 2,
        precio: 650,
    },
    {
        nombre: 'Margherita',
        ingredientes: ['Salsa', 'Queso', 'Albahaca'],
        id: 3,
        precio: 500,
    },
    {
        nombre: 'Sfincione',
        ingredientes: ['Salsa', 'Cebolla', 'Romero', 'Sal'],
        id: 4,
        precio: 700
    },
    {
        nombre:'Fugazzeta',
        ingredientes: ['Salsa', 'Queso', 'Cebolla', 'Orégano', 'Sal'],
        id: 5,
        precio: 400,
    },
    {
        nombre:'Flammkuchen',
        ingredientes: ['Cebolla', 'Salsa', 'Queso', 'Bacon', 'Crema de Leche', 'Rúcula, Sal'],
        id: 6,
        precio: 1000,
    }
]



console.log('a)')

const pizzasConIdPar = pizzas.filter((pizzas) => {
    return pizzas.id % 2 == 1;

});

pizzasConIdPar.forEach((pizzas) => {
    console.log(`La pizza ${pizzas.nombre} contiene id impar`);
});




console.log('b)')


const pizzasMenoresA = (precio) => {
    return pizzas.some((pizzas) => {
        return pizzas.precio < precio;
    }) 
    ? console.log(`Si hay Pizzas menores a $${precio}`)
    : console.log(`No hay Pizzas menores a $${precio}`);
};

pizzasMenoresA(600);





console.log('c)')


const nombreYPrecioDeCadaPizza = pizzas.filter((pizzas) => {
    return pizzas.nombre && pizzas.precio;
});

nombreYPrecioDeCadaPizza.forEach((pizzas) => {
    console.log(`La ${pizzas.nombre} vale $${pizzas.precio}`);
});





console.log('d)')


const ingredientesDeCadaPizza = pizzas.filter((pizzas) => {
    return pizzas.nombre && pizzas.ingredientes;
});

ingredientesDeCadaPizza.forEach((pizzas) => {
    console.log(`La ${pizzas.nombre} contiene ${pizzas.ingredientes}`);
})