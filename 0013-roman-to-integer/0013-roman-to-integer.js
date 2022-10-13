/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const VALUES = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    
    let int = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I' || s[i] === 'X' || s[i] === 'C') {
            if (VALUES[s[i+1]] === VALUES[s[i]] * 5 || VALUES[s[i+1]] === VALUES[s[i]] * 10) {
                int += VALUES[s[i+1]] - VALUES[s[i]];
                i++
                continue;
            }
        }
        int += VALUES[s[i]];
    }
    return int;
};