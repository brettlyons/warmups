var intersection = require('../src');
describe('intersection', function() {

  it('returns an empty array if given an empty array', function() {
    var input1 = [];
    var input2 = [1, 2, 3, 5, 6, 9];
    var result = intersection(input1, input2);
    expect(result).toEqual([]);
  });
  it('returns an empty array if no intersection in two arrays', function() {
    var input1 = [1,2,3,4,5];
    var input2 = [6,8,7,9,10];
    var result = intersection(input1, input2);
    expect(result).toEqual([]);
  });
  it('returns the intersection of both input arrays', function() {
    var input1 = [1,2,3,4];
    var input2 = [3,4,5,6];
    expect(intersection(input1, input2)).toEqual([3,4]);
  });
});
