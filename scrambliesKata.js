function scramble(str1, str2) {
  /*  function go(str1, str2) {
      if(str2.length === 0) {return true;}
      if(str1.indexOf(str2[0]) == -1) { return false;}

      return go(str1.replace(str2[0], ""), str2.slice(1));
      }
      return go(str1, str2);
      } */
for(var i = str2.length - 1 ; i >= 0 ; i--) {
  if (str1.indexOf(str2[i]) == -1) { return false; }
  str1 = str1.replace(str2[i], "");
}
return true;
}
// for Scramblies

// okay here's an idea . . .
// if the given letter from str2 exists in string1, push it to an array.
// given that, if a given letter *already exists* in the array,
// check *twice* for it in string1, and on the second check,
// set the second arg of str1.indexOf to the index of the previous check.
// and if THAT doesn't work, return false;

function scramble(str1, str2) {
  function go(str1, str2, indexLetterPairs) {
    if(str2.length === 0) { return true;}
    indexLetterPairs.push({
      latestIndex: str1.indexOf(str2[0]),
      theLetter: str2[0]
    });
    if(indexLetterPairs[0].latestIndex == -1 ) { return false;}

    return function () { return go(str1.replace(str2[0], ""), str2.slice(1), indexLetterPairs) }
  }
  var f = go(str1, str2, []);
  while(typeof f == "function") {
    f = f();
  }
  return f;
}
/*
   function scramble(str1, str2) {
   if (str1.search(str2) != -1)  { return true; }
   return false;
   } */

function scramble(str1, str2) {
  var arr1 = str1.split('');
  var letterPool = arr1.reduce(function (collection, elem) {
    if (!collection[elem]) { collection[elem] = 1; }
    else { collection[elem] += 1; }
    return collection;
  }, {});

  for(var i = 0; i < str2.length ; i++) {

  }
  for(var i = 0; i < str2.length ; i++) {
    if (!letterPool[str2[i]]) { return false; }
    if (letterPool[str2[i]] =< 0) { return false; }
    else {
      letterPool[str2[i]] -= 1;
    }
  }
  return true;
}
}
