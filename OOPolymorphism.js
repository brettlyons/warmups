function Bicycle(wheelSize, color) {
  this.wheelSize = wheelSize;
  this.color = color;

}

Bicycle.prototype.toString = function() {
  return 'This sweet ' + this.color + ' bicycle has an awesome ' + this.wheelSize + ' wheelset.';

};

Bicycle.prototype.takeForRide = function() {
  return 'Currently riding a shiny ' + this.color + ' bike down the sidewalk!';

}

Bicycle.prototype.validateWheelSize = function(wheelSize) {
  if (this.validWheelSizes.indexOf(wheelSize) == -1) throw 'Wheelsize for road bikes must be one of ' + this.validWheelSizes.join(', ');

};

function BMXBike ( wheelSize, color ) {
  this.validWheelSizes = ['16', '20'];
  this.validateWheelSizes(wheelSize);
  this.wheelSize = wheelSize;
  this.color = color;
}

BMXBike.prototype = new Bicycle();

