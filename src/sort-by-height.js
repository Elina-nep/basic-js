const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const mySort = (a, b) => {
    if (a === b) return 0;
    if (a > b) return 1;
    return -1;
  };
  let newArr = arr.filter((el) => el !== -1);
  newArr.sort(mySort);
  let skipped = 0;
  return arr.map((el, index) => {
    if (el === -1) {
      skipped += 1;
      return el;
    }
    return newArr[index - skipped];
  });
}

// `sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])`
// `[-1, 150, 160, 170, -1, -1, 180, 190]`

module.exports = {
  sortByHeight,
};
