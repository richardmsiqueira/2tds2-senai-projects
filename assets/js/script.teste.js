/* let personSimple = "John Doe";
const personObject = new Object();
personObject.firstName = "John";
personObject.lastName = "Doe";
personObject.age = "50";
personObject.eyeColor = "blue";
console.log(personSimple);
console.log(personObject);
*/
/*let personSimple = "John Doe";
const personObject = {
    firstName: "John",
    lastName: "Doe",
    age: "50",
    eyeColor: "blue"
}
personObject.age = 10; 
console.log(personSimple);
console.log(personObject);*/
/*class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Olá, meu nome é ${this.name} e tenho ${this.age} anos.`);
    }
  
}
const user1 = new User ('João', 30)
user1.introduce();*/

/*class Pizza {
    constructor(base, sauce, toppings, cheese) {
        this.base = base;
        this.sauce = sauce;
        this.toppings = toppings;
        this.cheese = cheese;
    }
    getDescription() {
        return `Uma deliciosa pizza com base ${this.base}, molho de ${this.sauce}, coberturas de ${this.toppings}, e muito queijo`;
    }
    getTimerBase(){
        if(this.base == `traditional`) {
            return 10;
        } else if (this.base == `integral`) {
            return 15;
        } else {
            return `This base does nor exist!`
        }
    }
    getTimerTomate(){
        if(this.sauce == `tomate`) {
            return 10;
        } else if (this.sauce == `white sauce`) {
            return 15;
        } else {
            return `This sauce does nor exist!`
        }
    }
    getTimerToppings(){
        if(this.toppings == `peperoni`) {
            return 15;
        } else if (this.toppings == `calabresa`) {
            return 20;
        } else {
            return `This toppings does nor exist!`
        }
    }
    getTimerCheese(){
        if(this.cheese == `mozzarella`) {
            return 10;
        } else if (this.cheese == `cheddar`) {
            return 15;
        } else {
            return `This cheese does nor exist!`
        }
    }
}
const myPizza = new Pizza(`traditional`, `tomate`, `peperoni`, `mozzarella`);
console.log(myPizza.getDescription());
let timePizza = myPizza.getTimerBase() + myPizza.getTimerTomate() + myPizza.getTimerToppings() + myPizza.getTimerCheese();
console.log(`Time to cook the pizza = ` + timePizza);*/
/*class Calculator {
    add(a, b) {
        return a + b;
    }
    multiplicar(a, b) {
        return a * b;
    }
    subtract(a, b) {
        return a - b;
    }
}
const calculator = new Calculator();
const sumResult = calculator.add(5, 3);
console.log("Sum:", sumResult);
const multiplicarResult = calculator.multiplicar(4, 2);
console.log("Multiplication:", multiplicarResult);
const subtractionResult = calculator.subtract(10, 4);
console.log("Subtraction:", subtractionResult);*/
/*class Witch {
    constructor(name, patron, house, colorEyes) {
        this.name = name;
        this.patron = patron;
        this.house = house;
        this.colorEyes = colorEyes;
    }
    getName(){
        return `O nome do bruxo(a) é: ${this.name}`;
    }
    getHouse(){
        return `Ele(a) está na casa ${this.house}`;
    }
    getPatron(){
        return `Seu patron é: ${this.patron}`
    }
}
const witch1 = new Witch('Harry Potter', 'Deer', 'Grynffindor', 'green');
console.log(witch1.getName());
class TypeWitch extends Witch {
    constructor(name, patron, house, colorEyes, typewitch){
    super(name, patron, house, colorEyes);
    this.typewitch = typewitch
}
getTypeWitch() {
    if (this.typewitch === 'p') {
        return "Este bruxo é sangue puro";
    } else if (this.typewitch === 'M') {
        return "Este bruxo é Mestiço";
    } else {
        return "Este é um trouxe";
    }
  }
}
const harry = new TypeWitch('Harry Potter', 'Cervo', 'Grynffindor', 'Verde', 'M')
console.log(harry.getTypeWitch());*/

/*class CamaraSecreta {
     constructor(name, pwd){
     this.name = name;
     let _pwd = pwd; //atributo privado
    
     this.verifyPwd = (pwdInput) =>{
     return pwdInput == _pwd; //True or False
     }
     this.acessToChamber = () =>{
     let pwdInput = prompt("digite a senha");
    if (this.verifyPwd(pwdInput)){
    console.log(`Bem-Vindo a Câmara Secreta`);
    }else{
     console.log("Você não entra Trouxa");
    }
    }
    }
    
     //métodos Públicos
     showName(){
     console.log(`Nome do bruxo ${this.name}`)
     }
    }
    
    const MyAcess1 = new CamaraSecreta('Harry Potter', 'senha 123')
    
    MyAcess1.showName();//top
    //metodo privado
    MyAcess1.name = 'HP';
    MyAcess1.pwd = '123';
    MyAcess1.acessToChamber();*/

    