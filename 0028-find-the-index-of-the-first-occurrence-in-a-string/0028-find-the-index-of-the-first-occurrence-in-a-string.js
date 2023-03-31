/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const strLength = needle.length;
    for (let i = 0; i < haystack.length; i++) {
        const subStr = haystack.substring(i, i + strLength);
        if (subStr === needle) return i;
    }
    return -1;
};