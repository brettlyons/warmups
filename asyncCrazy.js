console.log(' Beginning periodization . . . ');
var piToggle = 2.5;
var topTime = new Date();// these hold Date objects
var botTime = new Date();
var jitterArray = [];
var i = 0;
while (i < 10000) {
  setTimeout(function() {
    if (piToggle == .5) { console.log(' Top of circle ', (topTime.getTime() - botTime.getTime()));
      piToggle = 2.5;
      topTime = new Date();
    } else {
      console.log(' Bottom of circle ', (botTime.getTime() - topTime.getTime()));
      piToggle = 0.5;
      botTime = new Date();
    }
    jitterArray.push(botTime.getTime() - topTime.getTime());
  }, Math.cos(Math.PI * piToggle));
  i++;
}
setTimeout(function() {
  console.log('Jitter in ms over 10k runs: ', (jitterArray.reduce(function(n, p) {return n + p}, 0)) / jitterArray.length);
}, 1000);

