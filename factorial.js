// worst case: O(n) Linear
// average case: O(n) Linear
// best case: O(n) Linear

//justification:

// The number times you loop through this algorithm is equal to the value of the number you pass in to it.  Therefore, the number of loops will increase proportionately with the increase of the input's value - making the complexity linear.

// The worst, the best, and the average cases are all the same since in each case, you will run through the loop the same number of times.  

// 'use strict';

// function factorial(n) {
//   // Base Case - when n is equal to 0, we stop the recursion
//   if (n === 0) {
//     return 1;
//   }
//   // This is our Recursive Case
//   // It will run for all other conditions except when n is equal to 0
//   return n * factorial(n - 1);
// }