const numbers = [5, 7, -2, 4, 8, 9, 13];
// even numbers from "numbers" array will be added here
let evens = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0 ) {
    evens.push(numbers[i]); // adds numbers[i] at the end of the evens
  }
}

console.log("After you: ", evens);

evens = [];
numbers.forEach(function(currentElement) {
  if (currentElement % 2 === 0) {
    evens.push(currentElement);
  }
});

console.log("After forEach: ", evens);

evens = [];
numbers.forEach(currentElement => {
  if (currentElement % 2 === 0) {
    evens.push(currentElement);
  }
});

console.log("After forEach with Arrow Function: ", evens);

// Set interval function: lexical this

window.onload = function() {
  const button = document.getElementById("myelement");
  
  this.clicked = 0;
//   button.addEventListener("click", function() {
//     console.log("This inside event handler ", this)
//     this.clicked++; same as : this.clicked = this.clicked + 1; same i++;
//     console.log("Button clicked " + this.clicked + " times");
//   });
// }

//  const that = this;
//  button.addEventListener("click", function() {
//     console.log("This inside event handler ", this)
//     that.clicked++;
//     console.log("Button clicked " + that.clicked + " times");
//   });
  
  
   button.addEventListener ("click", () => {
    this.clicked++;
    console.log("Button clicked " + this.clicked + " times");
  });
};

console.log("---------- CLASSES -----------");

class Animal {
  // special method used for object creation initialization only one per class
  // this is the one that's called when using "New"
  constructor(options) { 
    options = options || {};
    
    this.name = options.name;
    this.color = options.color;
    this.weight = options.weight;
    this.height = options.height;
    this.legs = options.legs;
     
  }
  
  eat() {
    console.log("nom, nom animal is eating!")
  }

  speak() {
    console.log("animal is speaking!")
  }
  
  get biometricData() {
    return "This animal is: " + this.height + " tall and weights: " + this.weight;
  }
  
  // Define setter methods: 
  set biometricData(data) {
    this.height = data[0];
    this.weight = data[1];
  }
  
  static SIT() {
    console.log("Sitting from a static method: ");
  }
}

// Create Animal instance:
const fulga = new Animal ({
  name: "Fulga",
  color: "purple",
  weight: "200 kg",
  height: "1.80",
  legs: 4
});

console.log("Fulga: ", fulga);
 
// Invoke class methods;
fulga.eat();
fulga.speak();

// Use getter 
// property, NOT method
console.log(fulga.biometricData);

// Use setter 
// property, NOT method
// The value assigned should be in the format expected by the setter. 
fulga.biometricData = ["2m", "250 kg"];
console.log(fulga);

// Calling a static method; NOT fulga.SIT;
Animal.SIT();

console.log("------INHERITANCE------")

//Define child class: 
class Dog extends Animal {
  //Constructor function is optional in the child class
  constructor(options) {
    // need to call super method, it calls the constructor of the parent class
    super(options);
    this.legs = 4;
    this.breed = options.breed;
    
  }
  
  // method overriding: 
  speak() {
    console.log("Ham Ham!");
  }
}

const nero = new Dog ({
  name: "Nero",
  color: "white",
  height: "50 cm",
  weight: "50 kg",
  breed: "Ciobanesc German"
  
});

console.log("Nero", nero);
nero.speak();
nero.eat();

// arrow functions
// this se refera la functia parinte