// Define parent / superclass
function Animal(options) {
  options = options || {}; // Evitam erorile, cand apelam un new animal : var animalObj = new Animal{};
  this.name = options.name;
  this.color = options.color;
  this.weight = options.weight;
  this.legs = options.legs;
}

Animal.prototype.eat = function() {
  console.log("Nom nom...Animal is eating");
}

Animal.prototype.speak = function() {
  console.log("Hello...Animal is speaking");
}

var animalObj = new Animal({
  name: "A generic animal",
  color: "purple"
});
console.log("Animal Object", animalObj);

// Define the child / subclass
function Dog(options) {
  // The next line is used to inherit all properties
  // From parent class
  Animal.call(this, {legs: 4});
  
  // we can add any properties to a dog
  this.breed = options.breed;
  
  // composition relationship: has-a
  this.owner = new Owner({
    name: options.ownerName,
    age: options.ownerAge
  });
}

//console.log("Nero can't speak yet", nero.speak());

// the next line is used to iherit all method from parent class
Dog.prototype = Object.create(Animal.prototype);

var nero = new Dog({name: "Nero"});
nero.name = "Nero";
nero.color = "white";
console.log("Nero", nero);

console.log("Nero can speak now!");
nero.speak();

// method overriding(suprascrierea metodei)
Dog.prototype.speak = function() {
  console.log("Ham Ham !")
}
nero.speak();
nero.eat();
animalObj.speak();

// Define Owner class of composition example
function Owner(options) {
  options = options || {};
  this.name = options.name;
  this.age = options.age;
}

var rex = new Dog({
  ownerName: "Mela",
  ownerAge: 29
});
console.log("Rex: ", rex);
console.log("Rex's owner name", rex.owner.name);

// Polymorphism
function Cat(options) {
  Animal.call(this, {legs: 4});
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.speak = function() {
  console.log("Miau Miau!")
}

var tommy = new Cat();
tommy.name = "Tommy"

console.log("-----------------------");
var animalsArray = [tommy, rex, animalObj, nero];
for(var i = 0; i < animalsArray.length; i++) {
  var animal = animalsArray[i];
  animal.speak();

}

console.log("Static PROPERTIES and METHODES!")
console.log("Dog breed", Dog.breed)

var puffy = new Dog({name: "Puffy", breed: "bichon"});
console.log("Puffy.breed", puffy.breed);

// A static property is called on the class / constructor function itself, NOT on the instance / objects
Dog.HAS_PAWS = true;
console.log(Dog.HAS_PAWS); // TRUE
console.log(puffy.HAS_PAWS); // UNDEFINED

Dog.SIT = function() {
  console.log("Sitting down from a static method");
};
Dog.SIT();
// puffy.SIT(); // is not a function

console.log("Objects creation methodes: ");
var a = { x:2 };
var b = { x:2 };
console.log("a === b", b === a); //false
// a and b are diffrent objects (not primitives)
// that happen to have the same value

var n = 2;
    m = 2;
console.log("n === m", n === m );

var c = a;
console.log("a === c", a === c, a, c);

a.x = 7;
console.log("a, b, c", a, b, c)

var kitty = Object.create(Cat.prototype);
kitty.name = "Kitty";
console.log("Kitty", kitty);



