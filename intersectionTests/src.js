function intersection(array1, array2) {
  return array1.filter(function(element) {
    return (array2.indexOf(element) != -1);
  });
}

module.exports = intersection;
