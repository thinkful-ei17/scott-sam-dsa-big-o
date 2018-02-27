// worst case: O(n) Linear
// average case: O(n) Linear
// best case: O(n) Linear

// Justification: The operational cost increases equal to the number of employees in the organizational chart. The direct 1 to 1 relationship between the increase in the number of employee entries and the rate means that the complexity is linear.


// 'use strict';

// let organization = {
//   'Zuckerberg': {		
//     'Schroepfer': {
//       'Bosworth': {
//         'Steve':{},
//         'Kyle':{},
//         'Andra':{}
//       },
//       'Zhao': {
//         'Richie':{},
//         'Sofia':{},
//         'Jen':{}
//       },
//       'Badros': {
//         'John':{},
//         'Mike':{},
//         'Pat':{}
//       },
//       'Parikh': {
//         'Zach':{},
//         'Ryan':{},
//         'Tes':{}
//       }
//     },
//     'Schrage': {
//       'VanDyck': {
//         'Sabrina':{},
//         'Michelle':{},
//         'Josh':{}
//       },
//       'Swain': {
//         'Blanch':{},
//         'Tom':{},
//         'Joe':{}
//       },
//       'Frankovsky': {
//         'Jasee':{},
//         'Brian':{},
//         'Margaret':{}
//       }
//     },
//     'Sandberg': {
//       'Goler': {
//         'Eddie':{},
//         'Julie':{},
//         'Annie':{}
//       },
//       'Hernandez': {
//         'Rowi':{},
//         'Inga':{},
//         'Morgan':{}
//       },
//       'Moissinac': {
//         'Amy':{},
//         'Chuck':{},
//         'Vinni':{}
//       },
//       'Kelley': {
//         'Eric':{},
//         'Ana':{},
//         'Wes':{}
//       }
//     }}};

// let ticks=0;

// function traverseA(data, depth = 0) {
//   let indent = ' '.repeat(depth * 4);
//   ticks++;
//   Object.keys(data).forEach(key => {
//     console.log(indent + key);
//     traverseA(data[key], depth + 1);
//   });
// }

// console.log(traverseA(organization), ticks);