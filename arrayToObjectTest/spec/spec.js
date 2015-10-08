var bookData = require('../src');
describe('bookData', function () {
  var emptyInput = [];
  it('returns null if passed an empty array', function () {
    expect(bookData(emptyInput)).toEqual(null);
  })
  //it('returns ')
});
