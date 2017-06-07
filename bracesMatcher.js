function validBraces(braces){
	console.log(braces);
	function go(remBraces, topStack) {
  	if(remBraces.length == 0) { return true; }
    if(remBraces[0] == topStack)  { return go(remBraces.slice(1), remBraces[1]); }
    if(remBraces[0] == '(') {  return go(remBraces.slice(1), ')'); }
    if(remBraces[0] == '[') {  return go(remBraces.slice(1), ']'); }
    if(remBraces[0] == '{') {  return go(remBraces.slice(1), '}'); }
    if(remBraces[0] == ')' || remBraces[0] == ']' || remBraces[0] == '}') {  return false; }
   	return false; 
  }
  return go(braces, "");
}
