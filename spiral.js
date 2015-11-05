function center(length) {
  // if(length % 2 == 0) { return length;}
  return (length + 1) / 2;
}

const directionMap = { 'right': [1,0],
                       'up': [0, 1],
                       'left': [-1, 0],
                       'down': [0, -1]
                     }
// maybe rename right, up left and down to something else, like 0-3 in order to rotate via %4

function Coordinates(x, y) {
  const that = this;
  this.x = x;
  this.y = y;
  return {
    x: that.x,
    y: that.y
  };
}

// const testCoords = new Coordinates(1, 1);
// const otherTestCoords = new Coordinates(2,3);
// console.log(testCoords);
// console.log(nextMove('up', testCoords));
// console.log(otherTestCoords);
// console.log(nextMove('up', otherTestCoords));

function nextMove(moveNumber, currentCoords) {
  switch (moveNumber % 4) {
    case 0:
      console.log('RIGHT');
      return new Coordinates(currentCoords.x + center(moveNumber), currentCoords.y);
    case 1:
      console.log('UP');
      return new Coordinates(currentCoords.x, currentCoords.y + center(moveNumber));
    case 2:
      console.log('LEFT');
      return new Coordinates(currentCoords.x - center(moveNumber), currentCoords.y);
    case 3:
      console.log('DOWN');
      return new Coordinates(currentCoords.x, currentCoords.y - center(moveNumber));
    default: return 'Somehow invalid coordinates or move number';
  }
}
var output = [];
var currMv = new Coordinates(center(5), center(5));

// output.push(currMv);

for (var i = 0 ; i <= 8; i++) {
  output.push(nextMove(i, currMv));
  currMv = nextMove(i, currMv);
}
console.log(output);
