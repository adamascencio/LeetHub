/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  let columnNumber = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    let charCode = columnTitle.charCodeAt(i) - 64; // Convert A-Z to 1-26
    columnNumber = columnNumber * 26 + charCode;
  }
  return columnNumber;
};