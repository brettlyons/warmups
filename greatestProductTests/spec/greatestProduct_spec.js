var greatestProductOfPairs = require('../src');

describe('greatestProductOfPairs', function() {
  var input1 = [2,3,4,-5,92,100];
  var input2 = [-2,3,-4,-5,-92,-100];
  var input3 = [-2, -3, 5];
  var emptyInput = [];
  var nonNumberInput = 'Some string';
  it('returns the greatest product of any pairs within an array', function() {
    expect(greatestProductOfPairs(input1)).toEqual(9200);
    expect(greatestProductOfPairs(input2)).toEqual(9200);
    expect(greatestProductOfPairs(input3)).toEqual(6);
  });
  it('returns 0 if input is empty', function() {
    expect(greatestProductOfPairs(emptyInput)).toEqual(0);
  });
  it('returns null if input is a string', function() {
    expect(greatestProductOfPairs(nonNumberInput)).toEqual(null);
  })
});
