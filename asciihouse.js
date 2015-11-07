const testInput = ['   *\n',
                   '  ***\n',
                   '******\n']

function genLines(blueprint) {
  return blueprint.map(function (line) {
    return line.split('').map(topAndBottom)
      + line.split('').map(midLine)
      + line.split('').map(topAndBottom);
  });
}

function topAndBottom(character) {
      if(character == '*') {
        return "+---+";
      }
      else if(character == ' ') {
        return "     ";
      }
      else { return '\n';}
}

function midLine(character) {
    if(character == '*') {
      return "|   |";
    }
    else if(character == ' ') {
      return "     ";
    }
    else { return '\n';}
}


console.log(genLines(testInput).join('').toString());
