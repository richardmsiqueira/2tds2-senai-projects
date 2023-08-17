/*const companies = ["Apple", "Google", "Facebook"]

companies.forEach(company => {
    console.log(`Hey, ${company}!`);
}); */

/*const names = ["Whinds", "Freeway", "Teste", "Maria"]

names.forEach(name => {
    console.log(`Hi, ${name}!`);
}); */

/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers);

numbers.forEach((number, index) => {
    if (number % 2 == 0) {
        console.log(`o numero ${number} está na posição ${index}`);
    }
});*/

/*const cars = [
    {
        marca : "Ford",
        modelo : "Focus",
    },
    {
        marca : "BMW",
        modelo : "BMW 24",
    },
    {
        marca : "Fiat",
        modelo : "Palio",
    },
    {
        marca : "Audi",
        modelo : "A3",
    }
];

cars.forEach((car) => {
    console.log(`Marca: ${car.marca} - Modelo : ${car.modelo}`);
});*/

class Car {
    constructor(model, brand) {
        this.model = model,
            this.brand = brand
    }
}
class CarsList {
    constructor() {
        this.cars = [];
    }
    addCar(car) {
        this.cars.push(car)
    }
}
const listaDeCarros = new CarsList();

function addCarFunction() {
    let modelo = document.getElementById("model").value;
    let marca = document.getElementById("brand").value;
    const meuCarro = new Car(modelo, marca)
    listaDeCarros.addCar(meuCarro);
    console.log(listaDeCarros);
}


