// worst case: O(n) linear
// average case: O(n) linear
// best case: O(n) linear

//justification:

// In this algorithm the number of iterations is directly based off the value of the input, so when the value increases, the run-time also increases at the same rate.
// Therefore, the complexity is Linear (O(n)) for best, worst, and average cases.


// function triangle(n) {
//     if (n < 2) 
//         return n;
//     return n + triangle(n - 1);
// }

// ------------------------

// ITERATIVE

// worst case: O(n) linear
// average case: O(n) linear
// best case: O(n) linear

// function triangle(n) {
//     var tot = 0;
//     for (var i = 1; i <= n; ++i) {
// 	    tot += n;
//     }
//     return tot;
// }