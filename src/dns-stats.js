const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let counter = new Map();
  domains.forEach((d) => {
    let subs = d.split('.');
    let domain = '';
    for (let i = subs.length - 1; i >=0; i--){
      domain = domain.concat('.', subs[i])
      counter.set(domain, (counter.get(domain) ?? 0) + 1);

    }
  })
  return Object.fromEntries(counter)
}

module.exports = {
  getDNSStats
};
