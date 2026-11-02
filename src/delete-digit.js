const { NotImplementedError } = require('../lib');

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
  let digits = [];
  while (n > 0){
    digits.push(n % 10);
    n = Math.trunc(n / 10);
  }
  let nums = [];
  for( let j = 0; j < digits.length; j++){
    let c = 0;
    for( let i = digits.length - 1; i>=0; i--) if(i != j)c = c * 10 + digits[i];
    nums.push(c);
  }
  console.log(nums);
  return Math.max(...nums)
}

module.exports = {
  deleteDigit
};
