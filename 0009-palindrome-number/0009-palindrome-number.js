/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    let numString = x.toString();
    let arr = [];
    for (let i = 0; i < numString.length; i++) {
        arr.push(numString[i]);
    }
    const reversed = arr.reverse().join('');
    return numString === reversed ? true : false;
};