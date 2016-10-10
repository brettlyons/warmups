function Cow(name, num) {
  this.name = name;
  this.num = num;
  this.moo = function() {
    return String('moooooooo I\'m ' + this.name + ' moooooooo!!!!!!');
  };
}

function CowFarm(cows) {
  this.mooInOrder = function() {
    output = '';
    for (cow in cows) {
      output += cows[ cow ].moo() + '\n';
    }
    return output.slice(0, -1); // gotta slice off the extra \n
  };

  //this.mooInOrderRec = function() {
  //function go(cows)  {
  //if (cows.length === 0) {
  //return null;
  //}
  //cows[0].moo() + "\n"
  //return go(cows.slice(1));
  //}
  //return go(cows);
  //}
}


//1. construct cows that can moo
var bessy = new Cow('Bessy', 10);

//console.log(bessy.moo());
//moooooooo I'm Bessy moooooooo!!!!!!
var mooey = new Cow('Mooey', 2);

//console.log(mooey.moo());
//moooooooo I'm Mooey moooooooo!!!!!!
var chewy = new Cow('Chewy', 1);

//console.log(chewy.moo());
//moooooooo I'm Chewy moooooooo!!!!!!
// 2. construct a farm full of cows, where all cows can be called on to moo in turn
var farm = new CowFarm([bessy, mooey, chewy]);
console.log(farm.mooInOrder());

//moooooooo I'm Bessy moooooooo!!!!!!
//moooooooo I'm Mooey moooooooo!!!!!!
//moooooooo I'm Chewy moooooooo!!!!!!
