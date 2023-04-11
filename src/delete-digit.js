const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let myFunc = (num) => Number(num);
  let arr = Array.from(String(n), myFunc);
  let newArr = [];
  arr.forEach((el, i) => {
    const partArr = [...arr.slice(0, i), ...arr.slice(i + 1)];
    newArr.push(+partArr.join(""));
  });
  let max = Math.max(...newArr);

  return max;
}

module.exports = {
  deleteDigit,
};
