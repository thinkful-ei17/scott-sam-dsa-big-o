// worst case: O(n) Linear
// average case: O(n) Linear
// best case: O(n) Linear

// Justification: The operational cost increases equal to the number of descendants of the given parent. Unrelated animals in the hierarchy do not have an impact on the operational cost, but because there is a direct linear relationship between the inputs and the rate, the complexity is linear.


// 'use strict';

// const animalHierarchy = [
//   { id: 'Animals', parent: null },
//   { id: 'Mammals', parent: 'Animals' },
//   { id: 'Dogs', parent: 'Mammals' },
//   { id: 'Cats', parent: 'Mammals' },
//   { id: 'Golden Retriever', parent: 'Dogs' },
//   { id: 'Husky', parent: 'Dogs' },
//   { id: 'Bengal', parent: 'Cats' },
//   { id: 'Beagal', parent: 'Dogs' },
//   { id: 'German Sheperd', parent: 'Dogs' },
//   { id: 'Tiger', parent: 'Cats' },
//   { id: 'Fish', parent: 'Animals'},
//   {id:'Spot', parent: 'Beagle'}
// ];

// let ticks=0;
// // ==============================
// function traverse(animalHierarchy, parent) {
//   ticks++;

//   let node = {};
//   animalHierarchy.filter(item => item.parent === parent)
//     .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
//   console.log('ticks:', ticks);
//   return node;
// }

// console.log(JSON.stringify(traverse(animalHierarchy, 'Beagle')));