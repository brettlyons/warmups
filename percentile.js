const R = require('ramda');
var percentile = R.curry(function (length, pos) {
  return pos / length;
});

var outOfThousand = percentile(1000);
// test:
console.log(outOfThousand(166));
