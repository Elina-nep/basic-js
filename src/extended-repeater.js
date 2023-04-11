const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options = null) {
  if (options == null) {
    return str;
  }
  var result = "";
  if (typeof options.repeatTimes == "undefined") {
    options.repeatTimes = 1;
  }
  if (typeof options.additionRepeatTimes == "undefined") {
    options.additionRepeatTimes = 1;
  }
  if (typeof options.separator == "undefined") {
    options.separator = "+";
  }
  if (typeof options.addition == "undefined") {
    options.addition = "";
  }
  if (typeof options.additionSeparator == "undefined") {
    options.additionSeparator = "|";
  }
  for (let i = 0; i < options.repeatTimes; i++) {
    result = result + str;

    for (let j = 0; j < options.additionRepeatTimes; j++) {
      result = result + options.addition;
      if (j < options.additionRepeatTimes - 1) {
        result = result + options.additionSeparator;
      }
    }
    if (i < options.repeatTimes - 1) {
      result = result + options.separator;
    }
  }

  return result;
}

module.exports = {
  repeater,
};
