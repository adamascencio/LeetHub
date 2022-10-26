/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magArr = magazine.split('');
    for (let i = 0; i < ransomNote.length; i++) {
        if (magArr.includes(ransomNote[i])) {
            const charIdx = magArr.indexOf(ransomNote[i]);
            magArr.splice(charIdx, 1);
        } else {
            return false;
        }
    }
    return true;
};