// example of using constructors to generate objects
//

function House ( color, windows ) {
  this.color = color || "colorless";
  this.windows = windows;
  this.paintHouse = function ( newColor ) {
    this.color = newColor;
  },
  this.logMyThing = function () {
    console.log(this);
  }
};

thisoldHouse = new House( "green", true );

someNewHouse = new House ( false );
someNewHouse.logMyThing();

console.log(thisoldHouse.color);

thisoldHouse.logMyThing();

thisoldHouse.paintHouse( 'orange' );

console.log(thisoldHouse.color);

