/*
 *. Create an object to represent a laptop. It should have state for whether or not it is `on`, where or not it is `asleep`, and `numberOfDaysSinceLastRestart`. Give the laptop behaviors like `turnOff` (which should turn it off (not asleep) and reset the count since it was last restarted).
 *
 *2. Create an object to represent a coffee mug. It should have state for being `full` as well as its `capacityInOz` and `color`. A coffee mug should be able to be emptied and filled, but have no other behaviors.
 */

var lapObj = {
  isOn: false,
  isAsleep: false,
  numberOfDaysSinceLastRestart: 0,

  turnOff: function() {
    this.isOn = false;
    this.numberOfDaysSinceLastRestart = 0;
  },

  toggleSleep: function() {
    this.isAsleep = !this.isAsleep;
  }
};

var coffeeMug = {
  full: false,
  capacityInOz: 8,
  color: 'blue',

  fill: function() {
    this.full = true;
  },

  empty: function() {
    this.full = false;
  }
};

console.log(lapObj.isAsleep);
lapObj.toggleSleep();
console.log(lapObj.isAsleep);
