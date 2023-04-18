/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const stack = [];
    const arrWord1 = word1.split('');
    const arrWord2 = word2.split('');
    for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
        if (arrWord1[0]) stack.push(arrWord1.shift());
        if (arrWord2[0]) stack.push(arrWord2.shift());
    }
    return stack.join('');
};