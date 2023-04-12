const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let result = [];
  for (let i = 0; i < names.length; i++) {
    result.push(names[i]);
    if (names.slice(0, i).includes(names[i])) {
      let itemNum = names.slice(0, i).filter((el) => el === names[i]);
      result[i] = names[i] + `(${itemNum.length})`;
    } else if (result.slice(0, i).includes(names[i])) {
      result[i] = names[i] + `(1)`;
    }
  }
  return result;
}

// console.log(renameFiles(["doc", "doc", "image", "doc(1)", "doc"]));
// ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']

module.exports = {
  renameFiles,
};
