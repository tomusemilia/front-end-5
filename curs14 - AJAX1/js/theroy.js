var personString = '{ "name": "Emilia", "age": 25, "gender": "F" }'  // string format JSON - Javascript Oject Notation
// format JSON in interior cu ghilimele duble si simple in exterior. Este un standard de a scrie JS.
var personString1 =  "\"name\": \"Emilia\", \"age\": 25, \"gender\": \"F" // double quotes exemple
var person = { 
  name: "Emilia", 
  age: 25,
  gender: "F" }  // obiect

var age = 25;

console.log("Nume: ", personString.name);
person.age = person.age + 1
console.log("Person Age: ", person.age);

console.log("Type of person String:" , typeof personString);
console.log("Type of person:" , typeof person);
console.log("Type of age:" , typeof age);

// Deserializare
var convertedPersonStringToObject = JSON.parse(personString)  // parse este o metoda 
// Serializare
var convertedPersonToString = JSON.stringify(person) 

console.log("convertedPerson: ", convertedPersonStringToObject);

console.log("convertedPerson: ", convertedPersonToString);

// "typeof" verifici ce tip de variabila ai

// console.log("Nume: ", person.name);