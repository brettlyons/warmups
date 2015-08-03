// example of using constructors to generate objects
//

function House ( color, windows ) {
  this.color = color || "colorless";
  this.windows = windows;
// paintHouse was here as a method
  this.logMyThing = function () {
    console.log(this);
  }
};

thisoldHouse = new House( "green", true );

someNewHouse = new House ( false );
someNewHouse.logMyThing();

var paintHouse = function ( newColor ) {
    this.color = newColor;
}

console.log(thisoldHouse.color);

thisoldHouse.logMyThing();

paintHouse.apply( thisoldHouse, ['orange'] );
//function.apply ( objName , [parameters for function]);

console.log(thisoldHouse.color);

