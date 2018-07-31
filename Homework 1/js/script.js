// 1. Display in the console the numbers from 1 to 20.
for (var i = 1; i <= 20; i++) {
  console.log(i);
}


// 2. Display in the console the odd numbers from 1 to 20.
for (var i = 0; i <= 20; i++) {
if ( (i%2) !==0) {
  console.log(i);
}
}


// 3. Compute the sum of the elements of an array and display it in the console.
var sum = [4, 8, 1].reduce(add, 0);
function add(a, b) {
    return a + b;
}
console.log(sum); // 13 - result


// 4. Compute the maximum of the elements of an array and display it in the console.
var myArray = [7, 47, 23, 11, 6, 4];
var min = myArray[0];
var max = myArray[0];
var total = 0;
for (var i = 0; i < myArray.length; i++) {
  if (myArray[i] < min) {min = myArray[i];}
  if (myArray[i] > max) {max = myArray[i];}
  total += myArray[i]
}
console.log(max);  // 47 - result


// 5. Compute how many times a certain element appears in an array.

var list = [4, 14, 13, 5, 1, 12, 5, 87, 98, 5, 5];
  count = {};
list.forEach(function(a) {
  count[a] = (count[a] || 0) + 1;
});
console.log(count);
if (count[5]) {
  console.log("5 appears : " + count[5] + " time");
}
else {
  console.log("5 does not appear");
} 







