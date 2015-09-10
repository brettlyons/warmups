function MyConstructor() {
  this.name = 'MyConstructor';
  this.toString = function() {
    return this.name;
  }
}

MyConstructor.prototype.stuffItDoes = function(theStuff) {
  return this + ' is doing ' + theStuff;
}

var construc = new MyConstructor();
console.log(construc.stuffItDoes('stuff'));
console.log(construc.stuffItDoes('lambda expressions'));
console.log(construc.stuffItDoes('the dishes with its mind'));
console.log(construc.stuffItDoes('the stuff its doing'));

