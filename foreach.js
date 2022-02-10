// Example of using the foreach() function, which is similar to Python for loop function
//Use to generate the square of each value in the array
/ This method requires a single parameter known as the callback function
// The callback function will be performed on each element in the array.
// Therefore, the callback function itself will take in an argument that will be the current element
// As with any function, this can be named anything, but we will call it element, so we understand
// where this argument is coming from. Next we peerform the logic we want to perform on each element.
// Let's simply square and log each number to the console
let numbers = [1,2,3,4,5,6];
numbers.forEach(function (element) {
  console.log(element**2);
})
// The forEach method provides a quick and easy way to apply a set of instructions to each element inside of an array.