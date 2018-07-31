// We’re at a nutrition center, and we have the data from our customers ( name, gender, height,
// weight). Write a JS script that prints in browser Console the following info for each user.

//FOR JOHN DOE:
var name = "John Doe";
var gender = "M";
var height = "166";
var weight = "66";
var bmi = weight / (height / 100 * height / 100);
if ( bmi < 18.5) {
  console.log(name + " | " + gender + " | " + "BMI: " + bmi.toPrecision(2) + " | " + "Underweight");
    }
else if ( bmi <= 25) {
    console.log(name + " | " + gender + " | " + "BMI: " + bmi.toPrecision(2) + " | " + "Normal");
    }
else if ( bmi <= 30) {
    console.log(name + " | " + gender + " | " + "BMI: " + bmi.toPrecision(2) + " | " + "Overweight");
    }
else {
    console.log(name + " | " + gender + " | " + "BMI: " + bmi.toPrecision(2) + " | " + "Obese");
    }

//FOR MARY ANNE:
var name = "Mary Anne";
var gender = "F";
var height = "179";
var weight = "96";
var bmi = weight / (height / 100 * height / 100);
if ( bmi < 18.5) {
    console.log(name + " | " + gender + " | " + "BMI: " + bmi.toPrecision(2) + " | " + "Underweight");
    }
else if ( bmi <= 25) {
    console.log(name + " | " + gender + " | " + "BMI: " + bmi.toPrecision(2) + " | " + "Normal");
    }
else if ( bmi <= 30) {
    console.log(name + " | " + gender + " | " + "BMI: " + bmi.toPrecision(2) + " | " + "Overweight");
    }
else {
    console.log(name + " | " + gender + " | " + "BMI: " + bmi.toPrecision(2) + " | " + "Obese");
    }

//PROMPT WITH BMI
var bmi = prompt("Enter BMI: ");
console.log(bmi);
if (bmi < 18.5) {
      alert("Underweigh");
  } else if (bmi <= 25) {
     alert("Normal");
  } else if (bmi <= 30) {
      alert("Overweight");
  } else {
      alert("Obese");
  }   