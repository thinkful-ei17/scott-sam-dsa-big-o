// Best-case Complexity: O(1)
// Worst-case Complexity: O(n^2)
// Average-case Complexity: O(n^2)

// Justification: In the best-case the first numbers in the two input arrays are the same, in which case the run time will be constant -- O(1), because it doesn't matter how long the input arrays are, the function will stop and return true after finding that el1 === el2. The worst-case and average-case complexity is polynomial (quadratic) -- O(n^2), because we are dealing with nested loops and if no numbers in the arrays match you will have to go all the way through the second array for each position in the first array.

'use strict';

function areYouHere(arr1, arr2) {
  let ticks = 1;
  for (let i=0; i<arr1.length; i++) {
    const el1 = arr1[i];
    ticks++;
    for (let j=0; j<arr2.length; j++) {
      const el2 = arr2[j];
      ticks++;
      if (el1 === el2) {
        console.log(ticks);
        return true;
      }
    }
  }
  console.log(ticks);
  return false;
}

console.log(areYouHere([1,4,5, 7, 8], [1,2,3,12,13]));