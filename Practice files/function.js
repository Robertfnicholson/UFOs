// Takes two numbers and adds them
function addition(a, b) {
  return a + b;
}
// To test the function. This is equivalent of using a print statement in Python to print the function
console.log(addition(65, 34));
// Functions can call other functions
function doubleAddition(c, d) {
  var total = addition(c, d) * 2;
  return total;
}
// Print to console the function result
console.log(doubleAddition(65, 34));