// worst case: O(n) linear
// average case: O(n) linear
// best case: 0(n) linear

//justification:

// The number of runs is always dependent on the length of the input string.  So, all the cases are linear.




// function reverseString(str) {
//   if (str.length < 2) {
//     return str;
//   }
//   return reverseString(str.slice(1)) + str[0];
// }

// ------------------------

// ITERATIVE

// worst case: O(n) linear
// average case: O(n) linear
// best case: O(n) linear

// function reverse_tail(str) {
//     var accumulator = "";
//     while (str !== "") {
//     	accumulator = str[0] + accumulator;
//     	str = str.slice(1);
//     }
//     return accumulator;
// }