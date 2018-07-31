//object empty
var robot = {};
console.log("Robot = ", robot);

var robot = {
  model: "TRX1000",
  weight: 100
};
console.log("Robot = ", robot);

//add new property
robot.color = "red";
console.log("Robot = ", robot);

//update property
robot.weight = 99;
console.log("Robot = ", robot);

//delete a property
//delete robot.model
//console.log("Robot = ", robot);

var robot = {
  model: "TRX1000",
  weight: 100,
  run: function () {
    console.log("The robot is running")
  }
};
console.log("Robot = ", robot);

//Call robot method
robot.run();

//Type of data
var name = "Emilia"
console.log("Type of string", typeof name);

var age = "10"
console.log("Type of string", typeof age);

var isNull = null;
console.log("Type of string", typeof isNull);

var isUndefined ;
console.log("Type of string", typeof isUndefined);

var list = "[]"
console.log("Type of string", typeof list);

//IF statement
var x = 10;
if (x > 0) {
  console.log("Positive number x = ", x);
} else {
  console.log("Negative number x = ", x);
}

var x = 0;
if (x > 0) {
  console.log("Positive number x = ", x);
} else if (x === 0) {
  console.log("x = ", x);
} else {
  console.log("Negative number x = ", x);
}

var currentTime = prompt("Enter time");
console.log(currentTime);
if (currentTime < 10) {
  console.log("Buna dimineata");
} else if (currentTime <= 18) {
  console.log("Buna ziua");
} else {
  console.log("Buna seara");
}

//FOR statement
for (var i = 0; i <= 10; i++) {
  console.log("Index = ", i);
}

//example
for (var i = 1; i<=5; i++) {
  //console.log("Line = ", i);
  var line = "";
  for (var j = 1; j <=5; j++)  {
    //console.log("Column = ", j);
    line += (i * j) + " ";
  //  console.log("Value = ", value);
 }
  console.log("LINE ", line);
}













