/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const arr = s.split(' ');
    const removeSpaces = arr.filter(char => char.length > 0);
    return removeSpaces[removeSpaces.length - 1].length;
};