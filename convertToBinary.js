// best-case: O(log(n)) Logarithmic
// worst-case: O(log(n)) Logarithmic
// average-case: O(log(n)) Logarithmic

// Justification: Every time we call the function we are halving the input that we feed back into the function, so as the value of the initial input increases, the affect on operational cost continually increases, but slower and slower, the larger and larger the input gets.

// 'use strict';

// function convertToBinary(num, ticks=1){
//   if(num>0){
//     ticks++;
//     let binary = Math.floor(num%2);
//     return (convertToBinary(Math.floor(num/2), ticks) + binary);
//   }else{
//     ticks++;
//     console.log(ticks);
//     return ''; //base case - at some point the divisions will lead to 0
//   }
// }

// console.log(convertToBinary(10));
// console.log(convertToBinary(100));
// console.log(convertToBinary(1000));
// console.log(convertToBinary(1024));
// console.log(convertToBinary(1025));
// console.log(convertToBinary(10000));
// console.log(convertToBinary(100000));
// console.log(convertToBinary(1000000));

// ------------------------

// ITERATIVE

// best-case: O(log(n)) Logarithmic
// worst-case: O(log(n)) Logarithmic
// average-case: O(log(n)) Logarithmic

// function convertToBinaryIter(num){
//   var binary = '';
//   while(num>0){
//       let rem = Math.floor(num%2);
//       binary = rem + binary;
//       num = Math.floor(num/2);
//   }
//   return binary;


// }
// console.log(convertToBinaryIter(124));