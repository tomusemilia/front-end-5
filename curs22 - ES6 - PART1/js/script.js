// Hoisting
test();

// global scope 
// str is not defined
function test() {
  //var str;
  // although str is not declared yet, it is hoisted
    
  for (var i = 1; i < 10; i++) {
    var str = "Something " + i;
    console.log(str);
  }
}

var myfunction = function() {
  console.log("My function")
};
myfunction()

// Error assignment const
const myNumber = 2;
// myNumber = 7; // error

const user = {
  name: "John",
  age: 35
};
// user = {
//   name: "Mary",
//   age: 35
// }; // error the same reason

user.name = "Mary";
console.log("User: ", user);

