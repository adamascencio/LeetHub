/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const PAIRS = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    
    const container = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            container.push(s[i]);
        } else if (container[container.length - 1] === PAIRS[s[i]]) {
            container.pop();
        } else {
            return false;
        }
    }
    return container.length > 0 ? false : true;
};