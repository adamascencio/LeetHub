/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let addOne = BigInt(digits.join('')) + 1n;
    let arr = Array.from(String(addOne), Number);
    return arr;
};