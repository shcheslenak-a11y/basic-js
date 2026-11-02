const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor (reverse=false) {
    this.reverse = reverse
  }
  encrypt(str, key) {
    if (!str || !key) throw Error('Incorrect arguments!')
    str = str.toUpperCase()
    key = key.toUpperCase()
    let newStr = [];
    let keyIndex = 0;
    for (let i in str) {
      let char = 0
      if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
        char = (str.charCodeAt(i) + key.charCodeAt(keyIndex) - 130) % 26 + 65
        keyIndex = (keyIndex + 1) % key.length
      } else char = str.charCodeAt(i)
      newStr.push(char)
    }
    if (this.reverse) newStr=newStr.reverse()
    return String.fromCharCode(...newStr)
  }

  decrypt(str, key) {
    if (!str || !key) throw Error('Incorrect arguments!')
    str = str.toUpperCase()
    key = key.toUpperCase()
    let newStr = [];
    let keyIndex = 0;
    for (let i in str) {
      let char = 0
      if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
        char = (str.charCodeAt(i) - key.charCodeAt(keyIndex)+26) % 26 + 65
        keyIndex = (keyIndex + 1) % key.length
      } else char = str.charCodeAt(i)
      newStr.push(char)
    }
    if (this.reverse) newStr=newStr.reverse()
    return String.fromCharCode(...newStr)
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};

const m = new VigenereCipheringMachine(true)
console.log(m.decrypt('AEIHQX SX DLLU!', 'alphonse'))