function myConstructor () {
  this.myMeth = function (  ) {
    console.log("myMeth within the constructor");
  }
};

var myFreshNewConstructor = new myConstructor();

myFreshNewConstructor.myMeth();
//myFreshNewConstructor.myOtherMeth();

myConstructor.prototype.myOtherMeth = function () {
  console.log("myOtherMeth outside of the constructor");
};

myFreshNewConstructor.myOtherMeth();
