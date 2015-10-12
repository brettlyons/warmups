var acronym = require('../src.js');

describe('acronym', function () {
  var emptyInput = '';
  var mixedCasInput = 'LmnOP';
  var upperCaseOnlyInput = 'LMNOP';
  var lowerCaseOnlyInput = 'zxme'
  it('returns a specific string when given an uppercase input', function() {
    expect(acronym(upperCaseOnlyInput)).toEqual('little mortal necrotic opulent putresence');
  });
  it('returns a specific string when given an mixed case input', function() {
    expect(acronym(upperCaseOnlyInput)).toEqual('little mortal necrotic opulent putresence');
  });
  it('returns an specific string when given a lowercase input', function() {
    expect(acronym(lowerCaseOnlyInput)).toEqual('zypher xylaphone mortal equivilent');
  });
  it('returns an empty string when given an empty input', function() {
    expect(acronym(emptyInput)).toEqual('');
  });
});
