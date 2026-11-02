const { NotImplementedError } = require('../lib');

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

function repeater(str, options) {
  const {separator: sep="+",
    repeatTimes: repT =1,
    addition: add ='',
    additionRepeatTimes: addT=1,
   additionSeparator: addS='|'
  } = options;
  let final = String(str)
  let result = ''
  for( let i=0; i< addT; i++){
    final += add
    if (i < addT - 1) final += addS;
  }
  for(i=0; i< repT; i++){
    result += final
    if (i < repT - 1) result += sep;
  }
  return result
}

module.exports = {
  repeater
};
