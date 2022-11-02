/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let output = Math.max(...nums);
    let currMin = 1;
    let currMax = 1;
    for (let i = 0; i < nums.length; i++) {
        let tmp = currMax * nums[i];
        currMax = Math.max(nums[i] * currMax, nums[i] * currMin, nums[i]);
        currMin = Math.min(tmp, nums[i] * currMin, nums[i]);
        output = Math.max(output, currMax);
    }
    return output;
};