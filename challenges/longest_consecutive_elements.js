/*
 * @author: Tsion Adefres
 * @title: Remove Duplicates from Array
 * @description: Simple function to remove dupes in-place from sorted array
 */

/**
 * @param {number[]} arr
 * @return {number}
 */

/**
 * Assumption: array elements are integers
 * Brute-force approach: sort first, then use a variable to record the maximum length, and traverse the array to update the maximum value.
 * For optimal time complexity, use hashset data structure since sets do not contain duplicates
 * The goal is to find a starting element of a sequence, 
 * iterate through the set array and check the length of the sequence once for each number
 * find where the sequence ends and count the total number of unique elements. 
 * Time Complexity: O(n) when n is the length of nums array
 * Space Complexity: O(n) since we're not using extra space/memory
 */
  
// HashSet for optimal time complexity
function longestConsecutiveElements(arr) {
    if (arr == null || arr.length === 0) return 0;
    
    // Create a new Set to store all unique numbers
    const newSet = new Set(arr);
    let maxLen = 0; // declare variable max sequence and set to 0

    // Iterate over the set array to ensure all numbers are unique    
    for (let num of newSet) {
        
        /* if the number that's one less than the current number is in the set,
            we can skip the current number since it will be captured in a different
            streak */
        if (newSet.has(num - 1)) continue;
  
        let currNum = num;
        // update the current max to 1 with each new loop
        let currMax = 1;
  
        // increment the current number by one until we find the end of the max number */
        while (newSet.has(currNum + 1)) {
            currNum++;
            currMax++;
        }
        // update the longest global max sequence to the current max if the current max is greater
        maxLen = Math.max(maxLen, currMax);
    }
  
    return maxLen;
}

const test = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutiveElements(test)); // 4

// npx jest challenges/longest_consecutive_elements.js
describe('length of longest consecutive elements', () => {
    it('longestConsecutiveElements()', () => {
        const arr = [100, 4, 200, 1, 3, 2];
        expect(longestConsecutiveElements(arr)).toEqual(4);
    });
    it('longestConsecutiveElements()', () => {
        const arr = [];
        expect(longestConsecutiveElements(arr)).toEqual(0);
    });
});


