function deacronym(acronym) {
  var wordDict = {
    a: 'actualization', b:'before', c:'commonplace', d:'direction', e:'equivilent',
    f: 'fruedian', g:'generous', h:'homoionic', i:'it', j:'juxtaposition',
    k: 'klingon', l:'little', m:'mortal', n:'necrotic', o:'opulent', p:'putresence',
    q: 'quietude', r:'rustic', s:'sentient', t:'turbulent', u:'ultra', v: 'violet',
    w: 'wonder', x: 'xylaphone', y: 'your', z: 'zypher'
  };
  function go(acronym, output) {
    if(acronym.length === 0) { return output.trim(); }
    output += addSpace(wordDict[acronym[0].toLowerCase()]);
    return function() { return go(acronym.slice(1), output); }
  }

  function addSpace(string) {
    return string + ' ';
  }

  var tailCall = go(acronym, '');
  while(typeof tailCall == 'function') {
    tailCall = tailCall();
  } // ikr, 5 loc just to get
  return tailCall;
}

module.exports = deacronym;
// console.log(deacronym("zxme"));
