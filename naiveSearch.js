// worst case: O(n) Linear
// average case: O(n) Linear
// best case: O(1) Constant

// justification:  

// In the best case, the match would occur at array[0].  It that case, it wouldn't matter how long the array was, we would only have to lokk at the first item in the array.

// In the worst case, there would be no match at all, and we would have to check every index in the array, so the run-time would increase proportionately with the length of the argument array.

// The average case is also linear because as you increase the number of items in the array, the time it takes you to make a match will also get proportionately longer. 

