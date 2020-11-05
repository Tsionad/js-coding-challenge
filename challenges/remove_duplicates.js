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
 * Assumption: input array is sorted in asc order
 * Since array is already sorted use two runners (read and write pointers) with a for-loop
 * If the two runners are duplicates, the fast runner will increment by 1
 * If they are different, both runners move one step forward
 * When the fast runner iterates through the entire array, the total number of distinct elements in the array will be the slow runner's current position in array plus 1 
 * Time Complexity: O(n) when n is the length of nums array
 * Space Complexity: O(1) since we're not using extra space/memory
 */

/** 
 * https://en.wikipedia.org/wiki/In-place_algorithm
 * https://jestjs.io/docs/en/configuration
 */
  
function removeDuplicates(nums) {
    // If there's no array return 0 
    if (!nums.length) return 0;
    // Declare a variable current, the slow runner, and set it to 0
     let current = 0;
    
    // Loop through array and increment i, the fast runner, if nums[current] = nums[i] to skip the duplicate
    for (let i = 1; i < nums.length; i++) {
        // if not a duplicate assign element at fast runner to element at current
        if (nums[i] !== nums[current]) {
            // increment slow runner
             current++;
             // repeat the same process until i reaches the end of array
             nums[current] = nums[i];       
         }
     }
     //return value of current + 1
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


