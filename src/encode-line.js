const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  strArr = [...str];
  let result = "";
  let number = "";
  strArr.forEach((element, index) => {
    if (element === strArr[index + 1]) {
      if (!number) number = 1;
      number += 1;
    } else {
      result += number;
      result += element;
      number = "";
    }
  });
  return result;
}

// console.log(encodeLine("abbcca"));
// '4a4t')

module.exports = {
  encodeLine,
};
