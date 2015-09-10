var foxTypes = ['Red Fox', 'Arctic Fox', 'Fennec Fox', 'Kit Fox', 'Swift Fox'];

function addThe(inStr) {
  return inStr.map(titleize);
}

function titleize(aString) {
  return 'the '.concat(aString);
}

console.log(addThe(foxTypes));
