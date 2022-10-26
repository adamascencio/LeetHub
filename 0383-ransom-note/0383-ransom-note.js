/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let result = true;
    const magArr = magazine.split('');
    for (let i = 0; i < ransomNote.length; i++) {
        magArr.includes(ransomNote[i]) ? magArr.splice(magArr.indexOf(ransomNote[i]), 1) : result = false;
    }
    return result;
};