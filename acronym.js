function deacronym(acronym) {
  var wordDict = {
    a: 'Actualize', b:'before', c:'commonplace', d:'direction', e:'equivilent',
    f: 'fruedian', g:'generous', h:'homoionic', i:'it', j:'juxtaposition',
    k: 'klingon', l:'little', m:'mortal', n:'necrotic', o:'opulent', p:'putresence',
    q: 'quietude', r:'rustic', s:'sentient', t:'turbulent', u:'ultra', v: 'violet',
    w: 'wonder', x: 'xylaphone', y: 'your', z: 'zypher'
  };
  function go(acronym, output) {
    if(acronym.length === 0) { return output; }
    output += wordDict[acronym[0].toLowerCase()] + ' ';
    return function() { return go(acronym.slice(1), output); }
  }

  var tailCall = go(acronym, '');
  while(typeof tailCall == 'function') {
    tailCall = tailCall();
  } // ikr, 5 loc just to get smtg other languages (And strict ecma 6) give free
  return tailCall;
}

console.log(deacronym("LMNOP"));
