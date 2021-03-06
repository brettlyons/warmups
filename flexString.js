const flexString = function() {
    var output = '';
    for(var i = 0; i < arguments.length; i++) {
        if (arguments.length % 2 == 0) {
            output += arguments[i] + ',';
        }
        else {
            output += arguments[i] + '|';
        }
    }
    return output.substring(0, output.length - 1);
};

console.log(flexString('some', 'strings')); // "some,strings"
console.log(flexString('some', 'strings', 'are')); // "some|strings|are"
console.log(flexString('some', 'strings', 'are', 'sometimes')); // "some,strings,are,sometimes"
console.log(flexString('some', 'strings', 'are', 'sometimes', 'cool')); // "some|strings|are|sometimes|cool"
