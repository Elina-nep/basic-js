const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr == []) {
    return [];
  }
  var arr2 = arr.slice();
  for (let i = 0; i < arr2.length; i++) {
    if (typeof arr2[i] == "string") {
      switch (arr2[i]) {
        case "--discard-next":
          if (i == arr2.length - 1) {
            arr2.splice(i, 1);
            i = i - 1;
            break;
          }
          if (
            arr2[i + 2] == "--discard-prev" ||
            arr2[i + 2] == "--double-prev"
          ) {
            arr2.splice(i, 3);
            i = i - 1;
            break;
          }
          arr2.splice(i, 2);
          i = i - 1;
          break;
        case "--discard-prev":
          if (i == 0) {
            arr2.splice(i, 1);
            i = i - 1;
            break;
          }
          arr2.splice(i - 1, 2);
          i = i - 1;
          break;
        case "--double-next":
          if (i == arr2.length - 1) {
            arr2.splice(i, 1);
            i = i - 1;
            break;
          }
          arr2[i] = arr2[i + 1];
          break;
        case "--double-prev":
          if (i == 0) {
            arr2.splice(i, 1);
            i = i - 1;
            break;
          }
          arr2[i] = arr2[i - 1];
          break;
      }
    } else if (typeof arr2[i] == "number") {
    } else {
      // arr2.splice(i, 1);
      // i = i - 1;
    }
  }
  return arr2;
}

module.exports = {
  transform,
};
