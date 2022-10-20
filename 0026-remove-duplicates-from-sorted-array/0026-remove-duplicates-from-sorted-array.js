/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const uniqueNums = Array.from(new Set(nums));
    const k = uniqueNums.length;
    uniqueNums.reverse().forEach(num => {
        nums.unshift(num);
        nums.pop();
    });
    return k;
};