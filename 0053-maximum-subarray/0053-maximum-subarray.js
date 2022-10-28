/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSub = nums[0];
    let currSum = 0;
    nums.forEach((num, idx) => {
        if (currSum < 0) currSum = 0;
        currSum += num;
        maxSub = Math.max(maxSub, currSum);
    });
    return maxSub;
};