// JS HOISTING
var x = 2;
// var result1 = sum(x, 4);
// console.log('RESULT_1', result1);
function sum(a, b) {
  return a + b
}

var result2 = (sum, x, 3)
// console.log('RESULT_2', result2);

setTimeout(function() {
  var result2 = sum(x, 3)
}, 1000)

console.log('RESULT_2', result2);

// while(true) {
//   console.log('emi')
// } - nu este recomndat.