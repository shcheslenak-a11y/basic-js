const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let m = []
  let t = arr.filter((v, i) => {
    if(v==-1)
      m.push(i);
    return v!=-1
  })
  t.sort((a, b) => a - b)
  m.forEach(element => {
  t.splice(element,0 ,-1) 
  });
  return t
}

module.exports = {
  sortByHeight
};
