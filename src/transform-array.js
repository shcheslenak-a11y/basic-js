const { NotImplementedError } = require('../lib');

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
function transform(arr ) {
  // Remove line below and write your code here
  if (Object.prototype.toString.call(arr) !== '[object Array]') throw Error("'arr' parameter must be an instance of the Array!");
  let new_arr = [];
  let isDecarded = false;
  arr.forEach((el, ind) => {
    if (typeof el =='string')
      switch (el){
        case '--double-next':
          if(ind < arr.length-1)
            new_arr.push(arr[ind + 1])
          break;
        case '--double-prev':
          if(ind > 0 && !isDecarded)
            new_arr.push(arr[ind - 1])
          isDecarded = false
          break;
        case '--discard-next':
          isDecarded = true;
          break;
        case '--discard-prev':
          if(ind > 0 && !isDecarded)
            new_arr.pop()
          isDecarded = false
          break;
    }
    else
      if (!isDecarded)
        new_arr.push(el)
      else if(!(ind < arr.length -1 && typeof arr[ind+1] =='string' && arr[ind+1].endsWith("prev"))) isDecarded=false
  });
  return new_arr
}

module.exports = {
  transform
};
