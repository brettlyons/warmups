
function myReplicate(sequence, number) {
  return sequence.reduce(function (accum, current) {
    for(var i = 0; i < number; i++) {
      accum.push(current);
    }
    return accum;
  }, []);
}

console.log(myReplicate(["a", "b", "c"], 3));
