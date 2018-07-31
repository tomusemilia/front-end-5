function myFirstFunction () {
  console.log("My first JS function");
}

// Call function
myFirstFunction();

function myFirstFunctionReturn() {
  return "My first JS function return";
}

var message =  myFirstFunctionReturn();
document.writeln(message);
document.writeln("<strong>" + message + "</strong>");

function displayStars () {
  var line = "";
  for (i = 0; i < 4; i++) {
   line += "*";
   console.log(line);
  }
}

displayStars();
displayStars();

// function with params
function displayStars1(nr) {
  var line = "";
  for (i = 0; i < nr; i++) {
   line += "8";
   console.log(line);
  }
}

displayStars1(4);
displayStars1(2);
displayStars1(9);


// function with default value for params
function displayStars2(nr = 4, char = "&") {
  var line = "";
  for (var i = 0; i < nr; i++) {
   line += char;
   console.log(line);
  }
}

displayStars2();
displayStars2();
displayStars2(2);
displayStars2(4, "-");

var fname = "Ion";
var lname = "Pop";
function displayName(fname, lname) {
  console.log(fname + " " + lname);
  fname = "Ion";
  console.log("Inside function fname", fname); //Ion
}

displayName(fname, lname);
console.log("Outside function fname", fname); //Pop



function displayNameObject(person) {
  console.log(person.fname + " " + person.lname);
  person.fname = "Ion";
  console.log("Inside function fname", person.fname); //Ion
}

var person = {fname: "Emi", lname: "Pop"}
displayNameObject(person);
console.log("Outside function fname", fname); // Ion

// Statement function

function statementFunction() {
  console.log("Statement function");
}
statementFunction();

// Expression function

var expFunction = function() {
  console.log("Exp function");
}
expFunction();

// Apel de functie (  ) ()
(function() {
  console.log("IIFE self invoking function");
})();


// Function with function as parameter
function testFunction() {
  //alert("Exec from another function");
}
function execOtherFunction(f) {  
  testFunction();
}
execOtherFunction(testFunction);

// Variables scope
var a = 1;    // Global
b = 2;        // Global
window.c = 3; // Global

function displayVariable() {
  var d = 4; // Local
  e = 5;  // Global
console.log("Inside Variable d = ", d)
console.log("Inside Variable e = ", e); 
}
displayVariable();
//console.log("Outside Variable d = ", d)
console.log("Outside Variable e = ", e);

// Closure
var x = 1; // Global scope
function firstF(){ 
  var y = 2;  // Local
  
  secondF(0);

  function secondF(){
    var z = 3;  // Local in secondF
    
    console.log("secondF z =", z); // 3
}
  w = 4;
  console.log("first x =", x ); // Global 1
  console.log("first y = ", y ); // Global 2
  // console.log("secondF z =", z); // Undefined
 
}
firstF();
  console.log("first x =", x ); // Global 1
//   console.log("first y = ", y ); // Undefined pt ca e in afara functiei.
//   console.log("secondF z =", z); // Undefined
  console.log("secondF w =", w); // Undefined




















