function ShoppingCart() {
  that = this;
  this.contents = [];
  this.applyDiscount = function (total, percentage) {
    if(percentage < 1) { // cover for accidental percentage mis
      return total * ( 1 + percentage);
    }
    return Number((total * ( 1 - percentage / 100 )).toFixed(2));
  }
  return {
    getContents: function () {
      return that.contents;
    },
    addItem: function (newItem) {
      that.contents.push(newItem);
    },
    removeItemByName: function (itemName) {
      that.contents = that.contents.filter(function (itemObject) {
        return (itemName !== itemObject.name);
      });
    },
    getTotal: function (discountPercentage) {
      if(discountPercentage == undefined) { discountPercentage = 0;}
      return that.applyDiscount(that.contents.reduce(function (total, current) {
        return total += current.price;
      }, 0), discountPercentage);
    }


  }
}

module.exports = ShoppingCart;
