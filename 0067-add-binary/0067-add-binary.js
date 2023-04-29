/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // Bits a & b
    let i = a.length - 1;
    let j = b.length - 1;
    
    // Var to hold the value of 1 if sum is >= 2
    let carry = 0;
    let result = '';
    
    // Iterate through strings a & b from right to left
    while (i >= 0 || j >= 0) {
        // Convert each bit in a & b to an int
        const bitA = i >= 0 ? parseInt(a[i], 10) : 0;
        const bitB = j >= 0 ? parseInt(b[j], 10) : 0;
        
        // Add bits a & b
        const sum = bitA + bitB + carry;
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
        i--;
        j--;
    }
    
    if (carry > 0) {
        result = carry + result;
    }
    
    return result;
};