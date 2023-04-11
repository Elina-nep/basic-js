import { NotImplementedError } from "../extensions/index.js";

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let catsNum = 0;
  for (let catsLineindex = 0; catsLineindex < matrix.length; catsLineindex++) {
    const catsLine = matrix[catsLineindex];
    for (let catsboxindex = 0; catsboxindex < catsLine.length; catsboxindex++) {
      let catsBox = catsLine[catsboxindex];
      if (catsBox === "^^") {
        catsNum++;
      }
    }
  }

  return catsNum;
}

module.exports = {
  countCats,
};
