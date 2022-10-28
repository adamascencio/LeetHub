/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) { 
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (nums.includes(diff) && i !== nums.indexOf(diff)) {
            result.push(i, nums.indexOf(diff));
            break;
        }
    }
    return result;
};