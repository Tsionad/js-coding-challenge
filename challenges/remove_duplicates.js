/*
 * @author: Tsion Adefres
 * @title: Remove Duplicates from Array
 * @description: Simple function to remove dupes in-place from sorted array
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * Assumption array is sorted in asc order
 * Since array is already sorted use two runners with a for-loop
 * Time Complexity: O(n) when n is the length of nums array
 * We're not using extra space/memory so space complexity is O(1)
 */

/** 
 * https://en.wikipedia.org/wiki/In-place_algorithm
 * https://jestjs.io/docs/en/configuration
 */
  
function removeDuplicates(nums) {
    // If there's no array return 0 
    if (!nums.length) return 0;
    // Declare a variable current that is a slow runner and set it to 0
     let current = 0;
    
    // Loop through array and increment i, the fast runner, if nums[current] = nums[current] to skip the duplicate
    for (let i = 1; i < nums.length; i++) {
        // if not a duplicate assign element at fast runner to element at current
        if (nums[i] !== nums[current]) {
            // increment slow runner
             current++;
             // repeat the same process again until i reaches the end of array
             nums[current] = nums[i];       
         }
     }
     //return length of current
     return current + 1;
}

const test = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(test)); // 5

// npx jest challenges/remove_duplicates.js
describe('remove duplicates from sorted array', () => {
    it('removeDuplicates()', () => {
        const nums = [1, 1, 2];
        expect(removeDuplicates(nums)).toEqual(2);
    });
    it('removeDuplicates()', () => {
        const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        expect(removeDuplicates(nums)).toEqual(5);
    });
});


