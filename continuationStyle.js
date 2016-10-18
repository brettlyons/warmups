// Trying to understand continuation passing style.

function pyth(x, y) {
    return function(x2) {
        return function(y2) {
            console.log(y2);
            return function (x2py) {
                return x2py;
           }.call(Math.sqrt(y2));
        }.call(y * y);
    }.call(x * x);
}
// doesn't work currently.
// console.log(pyth(2, 2));



