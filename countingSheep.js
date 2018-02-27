// worst case: O(n) linear
// average case: O(n) linear
// best case: O(n) linear

//justification:

// In this algorithm the number of iterations is directly based off the value of the input, so when the value increases, the run-time also increases at the same rate.
// Therefore, the complexity is Linear (O(n)) for best, worst, and average cases.


// function countSheep(num) {
//   //stopping condition of base case
//   if (num === 0) {
//     console.log(`All sheep jumped over the fence`);
//   }
//   //this is the recursive case
//   //this will be executed until it reaches base case
//   else {
//     console.log(`${num}: Another sheep jump over the fence`);
//     countSheep(num - 1);
//   }
// }