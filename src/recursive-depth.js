import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    var testing = 0;
    if (Array.isArray(arr)) {
      if (arr.length == 0) {
        testing = 1;
      } else {
        testing = 1 + Math.max(...arr.map(this.calculateDepth.bind(this)));
      }
    } else testing = 0;

    console.log("res", testing);
    return testing;
  }
}

module.exports = {
  DepthCalculator,
};
