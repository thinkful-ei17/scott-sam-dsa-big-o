// worst case: O(n) linear
// average case: O(n) linear
// best case: O(n) linear

//justification:

// In this algorithm the number of iterations is directly based off the length of the input array, so when the length increases, the run-time also increases at the same rate.
// Therefore, the complexity is Linear (O(n)) for best, worst, and average cases.



// function double_all(arr) {
//   if (!arr.length) {
//     return [];
//   }
//   return [arr[0] * 2, ...double_all(arr.slice(1))];
// }