
function f(x) {
  console.log('In order to understand recurion you must understand recursion.');
  function g(x) {
    y = 1;
    return 'Yo dawg, so I heard your closures like closures, so I added some closures to your closures';
  }
  return g(x) ;
};

var thingy = f(1);
console.log(thingy);
