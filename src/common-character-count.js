const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const map1 = new Map();
  const map2 = new Map();

  for (let c of s1) map1.set(c, (map1.get(c) ?? 0) + 1);
  for (let c of s2) map2.set(c, (map2.get(c) ?? 0) + 1);
  
  let common = 0;
  map1.forEach((v, k, m) => common += Math.min(map2.get(k) ?? 0, v));
  return common;
}

module.exports = {
  getCommonCharacterCount
};
