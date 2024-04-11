function hasTargetSum(array, target) {
  // Write your algorithm here
  // iterate over the array of numbers
  for (let a = 0; a < array.length; a++) {
    // for the first number to be iterated,i should find a another number that adds to our target integer
    // for example, if our number is 5, and the target is 13, the complementary number is 8)
    const complementaryNumber = target - array[a];
    // iterate over the rest of the numbers in the array
    for (let b = a + 1; b < array.length; b++) {
      // check if any of the remaining numbers is the complement
      // if so, return true
      if (array[b] === complementaryNumber) return true;
    }
  }
  // if we reach the end of the array, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
  The worst scenario is that the algorithm would go throught the array of n element twice for each pair of the numbers 
  Since it is comparing number a to number b as it iterates through the array trying to find the correct match ,eg finding the pair sock that matches example
  O(n²)
*/ 
  
/* 
  Add your pseudocode here
  create a function that takes in an array and a target integer as arguments
  add a loop that i can use to compare a number to its complementary number
  declare a variable as the first index (0) of the array 
  if the variable is less than then the total length of the array it will increment
  declare a variable and set it to be equal to the target integer minus the first variable
  declare a third variable as the second index (1) of the array
  this third variable should add itself to the first variable then increment if it is less than the total array length it will increment
  lastly we return a boolean if the third variable is strictly equal to the second variable then return true 
  if it is not equal return false
*/

/*
  Add written explanation of your solution here
  In the function hasTargetSum create a loop to compare two number
  declare the variable(a) as the first index of the array (0)
  if (a) is less than array.length it will increment 
  declare a variable (complementaryNumber) to be equal to the target integer minus (a)
  declare a variable (b) as the second integer of the array (1)
  (b) should add itself to (a) and if (b) is less than array.length it will increment
  return a boolean where array[b] === (complementaryNumber) returns true ,else returns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
