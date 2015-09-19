function parseQueryString(string) {
  var splitted = string.split('?')[1].replace(/%20/g,' ').split('&');
  var awesomeObj = {};
  for (var i = 0 ; i < splitted.length ; i++) {
    tmpSplit = splitted[i].split('=');
    for (var j = 0 ; j < tmpSplit.length + 1 ; j++)   {
      awesomeObj[tmpSplit[0]] = tmpSplit[1];
    }
    // ^these lines turned into two lines with url.
  }
  return awesomeObj;
}
console.log(parseQueryString(
  'http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA'));

//=> {find_desc: 'tacos', find_loc: 'San+FranciscoCA'}

console.log(parseQueryString(
  'http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week'));

//=> {q: 'dogs', sort: 'top', t: 'week'}
