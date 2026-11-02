const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  constructor (){
    this.nodes = []
  } ,
  getLength() {
    // Remove line below and write your code here
    return this.nodes.length
  },
  addLink(value) {
    // Remove line below and write your code here
    this.nodes.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    // Remove line below and write your code here
    this.nodes.splice(position - 1, 1)
    return this;
  },
  reverseChain() {
    // Remove line below and write your code here
    this.nodes = this.nodes.reverse()
    return this;
  },
  finishChain() {
    // Remove line below and write your code here
    console.log(this.nodes)
    const res = this.nodes.join("~~")
    this.nodes = []
    return res
  },
};

module.exports = {
  chainMaker,
};
