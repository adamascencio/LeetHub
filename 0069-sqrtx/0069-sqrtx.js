/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0;
    let right = x;
    let mid; 
    let result;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (mid * mid <= x) {
            left = mid + 1;
            result = mid;
        } else {
            right = mid - 1;
        }
    }
    return result;
};