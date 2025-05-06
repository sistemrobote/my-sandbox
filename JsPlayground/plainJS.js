
//*  OOP - Encapsulation:
/**
 * class Vallet {
  #balance = 0;

  getBalance = function () {
    return this.#balance
  }
  addFunds(val) {
    this.#balance += val;
  }
}
const myVallet = new Vallet()
console.log(myVallet.getBalance())
myVallet.addFunds(40);
console.log(myVallet.getBalance())
 */

//* OOP - Abstraction:
/**
 class SomeClass {
  set(x, y) {
    this.a = x;
    this.b = y;
  }

  getValues() {
    return [this.a, this.b];
  }
}
const someClass = new SomeClass();
someClass.set(2, 4);
console.log(someClass.getValues())
 */

//*  OOP - Polymorphism:
/**
 * function makeSpeak(object) {
  object.speak()
}

class Animal {
  speak() {
    console.log('Speak!');
  }
}
makeSpeak(new Animal());
*/

//* CLOSURES 
/**
 function closure(a) {
   return function saySomething(b) {
     console.log(`Say ${a + b}`)
   }
 }
 const saySomethingA = closure("A");
 saySomethingA("B");
 */

//* FACTORY PATTERN:
/**
 * class Alien {
  constructor(name, noize) {
    this.name = name;
    this.noize = noize;
    this.type = "Alien";
  }
  planet = "xxxx";
  sayName = () => {
    console.log(`My name is ${this.name} im from ${this.planet}`);
  }
}
const alien1 = new Alien("Bobo", "Zzzz");
const alien2 = new Alien("Alex", "AzAzAz");
alien1.sayName();
alien2.sayName();
 */

//* ABSTRACT FACTORY PATTERN:
/**
 * class Car {
  constructor() { }
  makeNoize() {
    console.log("RRRRRR")
  }
}
class Truck {
  constructor() { }
  makeNoize() {
    console.log("TrTrTrTr")
  };
}

class ChoseVehicle {
  constructor(type) {
    this.type = type;
  }
  createVehicle = function () {
    switch (this.type) {
      case 'car':
        return new Car()
      case 'truck':
        return new Truck()

      default:
        break;
    }
  }
}
const truck = new ChoseVehicle('truck').createVehicle();
const car = new ChoseVehicle('car').createVehicle();
truck.makeNoize()
car.makeNoize()
*/

//* Builder pattern:
/**
const bug = {
  name: 'bug',
  group: 'byggy',
}
const addFlyAbility = (obj) => {
  obj.fly = () => console.log(`i'm ${obj.name} and i can fly`);
}
addFlyAbility(bug);
bug.fly();
 */
