const { NotImplementedError } = require('../lib');

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
  let encoded = '';
  let [cur, num] = ['', 0];
  console.log(encoded)
  for (let c of str) 
    if (c == cur)
      num += 1;
    else {
      if(num > 1)
        encoded += num;
      encoded += cur;
      console.log(encoded)
      cur = c;
      num = 1
    }
  if(num > 1)
    encoded += num;
  encoded += cur;
  return encoded;
}

module.exports = {
  encodeLine
};
