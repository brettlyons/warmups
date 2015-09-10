for (var roomNum = 1 ; roomNum < 5 ; roomNum++) {
  console.log('Conference Room: ' + roomNum);
  for (var teamNum = 1 ; teamNum < 5 ; teamNum++) {
    console.log('Team Number ' + teamNum) ;
  }
}

console.log('\n And now for the while loop vers.\n');

var roomNum = 1;
var teamNum = 1;
while (roomNum < 5) {
  console.log('Conference Room: ' + roomNum);
  while (teamNum < 5) {
    console.log('Team Number ' + teamNum);
    teamNum++;
  }
  roomNum++;
  teamNum = 1;
}


