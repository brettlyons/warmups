// Trying to understand continuation passing style.
function add (num1, num2) {
    return function (andThen) { andThen(num1 + num2); };
}

function square (num) {
    return function (andThen) { andThen(num * num); };
}

function pyth_cps (x, y) {
    return function (andThen) {
        square(x)(function (x_squared)
                  {
        square(y)(function (y_squared)
                      {
        add(x_squared, y_squared)(
        function (added_squares) {
        return andThen(added_squares);
                            });
                    });
            });
    };
}

pyth_cps(3, 4)(console.log);


