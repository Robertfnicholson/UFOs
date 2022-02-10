// Add the following array
let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

// To iterate through each name in JavaScript, we can create a for loop.
function listLoop(userList) {
   for (var i = 0; i < userList.length; i++) {
     console.log(userList[i]);
   }
}
listLoop(friends);

// Create a for loop to iterate through an array of vegetables.
let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

// Build the for loop
var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}

// we'll loop through numbers without using an array.
for (var i = 0; i < 5; i++) {
   console.log("I am " + i);
}
