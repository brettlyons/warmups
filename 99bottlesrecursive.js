function bottles(number) {
  if(number == 1) {
  console.log(number, " bottle of beer on the wall", number, "  bottle of beer take one down, pass it around ",  (number -1), "bottles of beer on the wall");
    return 0;
  }
  console.log(number + " bottle of beers on the wall " + number + "  bottles of beer take one down, pass it around " + (number -1), " bottles of beer ont he wall");
  return bottles(number -1);
}

bottles(99);
