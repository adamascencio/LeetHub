/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const addOne = BigInt(digits.join('')) + 1n;
    return Array.from(String(addOne), Number);
};