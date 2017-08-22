/**
 * Test 1
 * This is the first coding challenge. Below are two arrays.
 * The second array is identical to the first except for one number.
 * Find the missing number and log it in the console
 *
 * You may use any development tools or package manager you like.
 * Lodash is included as a bower.json dependency in case you would like to use it.
 */

var arr = [1,2,5,7,4,8,12,15,17,37];
var secondArr = [1,17,5,12,4,7,15,2,37];

// Different ways to solve this Problem.
//
// 1) We can sort both arrays and then check when there is a mismatch
//    between the two arrays.
//
//    OR
//
// 2) No need to sort both arrays and just check when there is a mismatch.


function findMissingNumber (first, second) {

  var sortedFirst = first.sort(function (a, b) {
    return a-b;
  });

  var sortedSecond = second.sort(function (a, b) {
    return a-b;
  });

  var missing; // Assuming we have only one missing value.
              // If we have more than one then we can use array here.

  // We can define a function like Array.prototype.missing = function(sortedSecond) {}
  // and write logic there and call it using sortedFirst.missing(sortedFirst)
  // or we can do it as follows:

  for (var i in sortedFirst) {
    if (sortedSecond.indexOf(sortedFirst[i]) < 0) {
      missing = first[i];
      break;
    }
  }

  console.log("Solution for TEST 1 ---> Number missing in second array is", missing);
}

findMissingNumber(arr, secondArr);
