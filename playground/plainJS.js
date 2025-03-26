function Person(name) {
    this.name = name;
  
    // Old way (pre-ES6)
    this.sayHelloOld = function () {
      setTimeout(function () {
        console.log("Hello, I'm " + this.name);
      }, 1000);
    };
  
    // ES6 arrow function
    this.sayHelloNew = function () {
      setTimeout(() => {
        console.log("Hello, I'm " + this.name);
      }, 1000);
    };
  }
  
  const alice = new Person("Alice");
  alice.sayHelloOld(); // undefined or error, depending on context
  alice.sayHelloNew(); // "Hello, I'm Alice"