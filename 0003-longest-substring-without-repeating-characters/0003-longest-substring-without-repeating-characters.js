/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0;
    let stack = [];
    let max = 0;
    let left = 0; 
    let right = 1;
    stack.push(s[left]);
    while (right <= s.length) {
        max = Math.max(max, stack.length);
        if (stack.includes(s[right])) {
            left++;
            right = left + 1;
            stack = [s[left]];
        } else {
            stack.push(s[right])
            right++;
        }
    }
    return max;
};