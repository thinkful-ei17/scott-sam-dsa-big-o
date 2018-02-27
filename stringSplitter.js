// worst case: O(n) linear
// average case: O(n) linear
// best case: O(n) linear

//justification:

// In this algorithm the number of iterations is directly based off the length of the input array, so when the length increases, the run-time also increases at the same rate.
// Therefore, the complexity is Linear (O(n)) for best, worst, and average cases.

// 'use strict';

// function split(str, sep, ticks=1) {
//   var idx = str.indexOf(sep);
//   if (idx === -1) {
//     ticks++;
//   	console.log(ticks);
//   	return [str];
//   }
// 	ticks++;
//   return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep, ticks));
// }

// console.log(split('jan,feb,mar,apr,may,june,july,aug,sept,oct,nov,dec', ','));


// ------------------------

// ITERATIVE

// worst case: O(n) linear
// average case: O(n) linear
// best case: O(n) linear

// 'use strict';

// function split(str, sep) {
//   var ret = [];
//   while (true) {
//     var idx = str.indexOf(sep);
//     if (idx == -1) break;
//     ret.push(str.slice(0, idx));
//     str = str.slice(idx + sep.length);
//   }
//   ret.push(str);
//   return ret;
// }