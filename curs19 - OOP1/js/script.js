var emptyObject = {}; // no properties and no methodes
console.log(emptyObject);

var emptyObject2 = new Object(); 
console.log(emptyObject2);

var userMe = {
  name: "Emilia",
  age: 32,
  height: 174,
  weight: 62,
  "eyes color": "Blue",
//   age: 32, duplicated keys are not possible
  
  sayHi: function() { // method without parameters
    console.log("Hello world")
  },
  sayHiTo: function(name) { // method with parameters
    console.log("Hello " + name + "!")
  },
};

console.log(userMe);
userMe.sayHi();
userMe.sayHiTo("S + E");
console.log(userMe.name); // dot notation
console.log(userMe["eyes color"]);

var prop = "height";
console.log("Height: ", userMe[prop]); // will display height
console.log(userMe.prop);

prop = "age";
console.log("Age: ", userMe[prop]); // will display age

console.log("User Me Keys: ", Object.keys(userMe));
console.log("User Me Values: ", Object.values(userMe));

var keys = Object.keys(userMe);
for (var i = 0; i < keys.length; i++) {
  var key = keys[i];
  console.log(keys[i], userMe[key])
}

// Constructor function 
function User(options) {// denumirea functiei cu litera mare
  options = options || {};
  this.name = options.name || "";
  // this is used to avoid console errors
  // if we're not sending a name, the object
  // will get empty string as its name
  this.age = options.age;
  this.height = options.height;
  this.weight = options.weight;
  this.calculateBMI = function() {
    return this.height / this.weight;
  }
}

  var user = new User({
    name: "Emilia",
    height: 174,
    weight: 62
  });

console.log("User created with constructor function: ", user)
console.log("User BMI: ", user.calculateBMI());

var colleague = new User({
  name: "Tami",
  height: 165,
  weight: 55
});

console.log("BMI Tami: ", colleague.calculateBMI());

console.log("User prototype: ", User.prototype);

User.prototype.sayHi = function() {
  console.log("HI there from: " + this.name);
}
user.sayHi();
colleague.sayHi();

console.log("There is not a prototype property on object: ", 
            user.prototype); // undefined

console.log("Prototype attribute: ", 
            Object.getPrototypeOf(user),
            Object.getPrototypeOf(colleague));

console.log("Class is prototype of object: ", 
            User.prototype.isPrototypeOf(user),
            User.prototype.isPrototypeOf(colleague));

console.log(user.toString());


