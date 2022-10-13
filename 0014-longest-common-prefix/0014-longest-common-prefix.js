/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let answer = '';
    let minWordIdx = 0;
    let minWordCount = strs[minWordIdx].length
    let arr = [];
    strs.forEach((word, idx) => {
        word.length < strs[0].length ? minWordIdx = idx : null;
    });
    while (minWordCount >= 0) {
        strs.forEach(word => arr.push(word.slice(0, minWordCount + 1)));
        let isPrefix = arr.every(word => word === arr[0]);
        if (isPrefix) return arr[0];
        minWordCount--;
        arr = [];
    }
    return answer;
};