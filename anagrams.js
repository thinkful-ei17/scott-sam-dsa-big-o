//worst case: O(n!) Factorial
// average case: O(n!) Factorial
// best case: O(n!) Factorial

//Justification:

//The number of loops through the algorithm is based on the length of the input string... for each additional character the resulting loops are increased by a fator of the new length of the word.  This is very bad for run time and gets very big very quickly.
//All of the cases are the same, and it would take a lot of time to implement this algorithm on a large scale.

// 'use strict';


// let ticks = 0;

// function anagrams(prefix, str) {
//   ticks++;
//   if (str.length <= 1) {  
//     console.log(`The anagram is ${prefix}${str}`, ticks);
//   } else {
//     for (let i = 0; i < str.length; i++) {
//       let currentLetter = str.substring(i, i + 1);
//       let previousLetters = str.substring(0, i);
//       let afterLetters = str.substring(i + 1);
//       anagrams(prefix + currentLetter, previousLetters + afterLetters);
//     }
//   }
// }

// function printAnagram(word) {
//   //console.log(`The word for which we will find an anagram is ${word}`);
//   anagrams(' ', word);
// }

// printAnagram('cat');
// printAnagram('cats');
// printAnagram('tacos');