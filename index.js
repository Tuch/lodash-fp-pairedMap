var fp = require('lodash/fp');

module.exports = fp.curry(function(iteratee, object) {
  return fp.flow(fp.toPairs, fp.map(iteratee), fp.fromPairs)(object);
});
