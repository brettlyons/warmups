var ShoppingCart = require('../ShoppingCart');
var ItemsFactory = require('../ItemsFactory');

describe('ItemsFactory', function () {

  it('generates and returns a bread object with price and name', function () {
    var items = new ItemsFactory();
    expect(items.makeBread()).toEqual({
      name: "Bread",
      price: 1.25
    });
  });

  it('returns an oatmeal object with price and name', function () {
    var items = new ItemsFactory();
    expect(items.makeOatmeal()).toEqual({
      name: "Oatmeal",
      price: 3.00
    });
  });
});

describe('Shopping Cart', function () {

  it('starts off empty', function () {
    var emptyCart = new ShoppingCart();
    expect(emptyCart.getContents()).toEqual([]);
  });

  it('items can be added to the cart', function () {
    var cartOne = new ShoppingCart();
    var itemMaker = new ItemsFactory();
    cartOne.addItem(itemMaker.makeBread());
    expect(cartOne.getContents()).toEqual([{name: "Bread", price: 1.25}]);
    cartOne.addItem(itemMaker.makeOatmeal());
    expect(cartOne.getContents()).toEqual([{name: "Bread", price: 1.25}, {name:"Oatmeal", price: 3.00}])
  });

  it('an item can be removed from the cart', function () {
    var cartOne = new ShoppingCart();
    var itemMaker = new ItemsFactory();
    cartOne.addItem(itemMaker.makeBread());
    cartOne.addItem(itemMaker.makeOatmeal());
    expect(cartOne.getContents()).toEqual([{name: "Bread", price: 1.25}, {name:"Oatmeal", price: 3.00}]);
    cartOne.removeItemByName('Bread')
    expect(cartOne.getContents()).toEqual([{name:"Oatmeal", price: 3.00}]);
    cartOne.removeItemByName('Oatmeal')
    expect(cartOne.getContents()).toEqual([]);
  });

  it('get the total price of all of the items in the cart', function () {
    var cartOne = new ShoppingCart();
    var itemMaker = new ItemsFactory();
    cartOne.addItem(itemMaker.makeBread());
    cartOne.addItem(itemMaker.makeOatmeal());
    expect(cartOne.getTotal()).toEqual(4.25);
  });

  it('gets the total price of the items in the cart with a percentage discount applied', function () {
    var cartOne = new ShoppingCart();
    var itemMaker = new ItemsFactory();
    cartOne.addItem(itemMaker.makeBread());
    cartOne.addItem(itemMaker.makeOatmeal());
    expect(cartOne.getTotal(5)).toEqual(4.04); // 5% discount
  });

});

