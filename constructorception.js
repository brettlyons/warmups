function Constructor(param) {
  var that = this;
  return {
    Constructor: function(param) {
      return {
        Constructor: function(param) {
          console.log('I heard your encapsulation liked encapsulation, so I added some constructors to your constructors...',  param);

        }

      }
   }
  }

}

var construc = new Constructor();

console.log(construc.Constructor().Constructor('dawg'));
