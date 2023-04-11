/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        s[i] === '*' ? stack.pop() : stack.push(s[i]);
    }
    return stack.join('');
};