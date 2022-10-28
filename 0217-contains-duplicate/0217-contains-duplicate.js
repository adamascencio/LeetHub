/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const removeDups = [...new Set(nums)];
    return removeDups.length === nums.length ? false : true;
};