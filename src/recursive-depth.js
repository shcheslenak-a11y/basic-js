const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
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
    if (Object.prototype.toString.call(arr) !== '[object Array]') return 0;
    let c = arr.map((v) => this.calculateDepth(v)).concat([0])
    return Math.max(...c) + 1
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
