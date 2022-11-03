/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [];
    
    // Sort nums to check for duplicates
    const sortedNums = nums.sort((a, b) => a - b);
    console.log(sortedNums);
    // Iterate through sortedNums
    for (let i = 0; i < sortedNums.length; i++) {
        const a = sortedNums[i];
        // if current num === prior num skip current iteration
        if (i > 0 && a === sortedNums[i - 1]) continue;
        
        // search for combinations where a + b + c = 0
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            const b = sortedNums[l];
            const c = sortedNums[r];
            const threeSum = a + b + c;
            
            // if threeSum > 0 decrease r since this will reduce the sum of the sorted array
            if (threeSum > 0) {
                r -= 1;
            // if threeSum < 0 increase l since this will increase the sum of the sorted array
            } else if (threeSum < 0) {
                l += 1;
            // if threeSum = 0 we've found our answer push to res
            } else {
                res.push([a, b, c]);
                l += 1;
                r -= 1;
                while (sortedNums[l] === sortedNums[l - 1] && l < r) l += 1;
                while (sortedNums[r] === sortedNums[r + 1] && l < r) r -= 1;
            }
        }
    }
    return res;
};