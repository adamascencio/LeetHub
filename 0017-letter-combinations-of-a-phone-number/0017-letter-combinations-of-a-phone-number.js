/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const PAIRS = {
        '2': ['a', 'b', 'c'], 
        '3': ['d', 'e', 'f'], 
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'], 
        '6': ['m', 'n', 'o'], 
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'], 
        '9': ['w', 'x', 'y', 'z']
    }
    if (digits.length === 0) return [];
    if (digits.length === 1) return PAIRS[digits];
    const answer = []; 
    
    function backtrack(str, idx) {
        if (str.length === digits.length) {
            answer.push(str);
        } else {
            const chars = PAIRS[digits[idx]];
            for (let char of chars) {
                backtrack(str + char, idx + 1)
            }
        }
    }
    
    backtrack('', 0);
    return answer;
    
};