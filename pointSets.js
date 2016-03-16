// given a set of points in 2-d space, find the line that intersects the
// greatest number of points.  e.g.,
//
var input = [
  [1,2], [3,4], [5,6], [1,3], [1,4], [2,2]
];

var output = {
  // some representation of the line through (1,2) (3,4) (5,6)
  x: 1,
  y: 2,
  m: 1
};

/* var dataLine = {
	x1: 1
  y1: 2
  x2: 2
  y2: 4
  m: 3
} */

function getSlope (point1, point2) {
	return ((point2[1] - point2[0]) / (point1[0] - point1[1]));
}

function lineFinder (points) {
	var output = [];
	// y2 - y1 / x2 - x1
	var intermediateDataLines = [];
	for(var i = 0; i < points.length ; i++) {
  	for(var j = i; j < points.length; j++) {
   		intermediateDataLines.push({
        x1: points[i][0],
        y1: points[i][1],
      	x2: points[j][0],
        y2: points[j][1],
        m: getSlope(points[i], points[j])
      });
    }
  }
  return intermediateDataLines;
}
console.log(lineFinder(input));

