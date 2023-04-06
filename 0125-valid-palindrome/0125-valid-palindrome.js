/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const strLowerCase = s.toLowerCase()
        .replace(/[^0-9a-z]/gi, '');

    const reversedStr = strLowerCase.split('')
        .reverse()
        .join('');
    
    return reversedStr === strLowerCase;
};