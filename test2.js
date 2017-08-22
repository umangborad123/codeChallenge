/**
 * Test 2
 * Choose one of the following
 */

/**
 * Fix the function so that it returns [4,[1],[2],[3],[4]];
 */

var count = 4;

function foo(count) {
  var table = [count];

  // No need for this while loop to get the desired output.

  // while (count-- > 0) {
  //   table.push([]);
  // }

  // We cannot use table[count].push here, instead use table.push
  // Here if we use count < table.length then it will go to infinity loop.

  for (var i = 1; i <= count; i++) {
    table.push([i]);
  }
  return table;
}

console.log("Solution for TEST 2 (a)", foo(count));

////////
// OR //
////////

/*
 * The desired result is a countdown from 5 to 0 using console log messages.
 * Explain why the code only logs -1, then fix the code so it works as expected.
 */

 // Problem:
 // Here, setTimeout function will be stored in a queue 6 times and when i becomes 6 it will execute
 // console.log(num - i) 6 times which will be 5 - 6 = -1.
function countdown (num) {
  // Two ways to solve this problem.
  // 1) Define i using let instead of var.
  // 2) use IIFE (Immediately Invoked Function Expression) inside for loop and
  //    passing the reference of i as an argument to an iife function.
  //    When we use iife function, correct value of i is stored and then it works perfectly.
  for (var i = 0; i <= num; i += 1) {

    (function iife(i){
      setTimeout(function () {
        console.log(num - i);
      }, i * 1000);
    })(i);
  }
}

console.log("Solution for TEST 2 (b)",countdown(5));
