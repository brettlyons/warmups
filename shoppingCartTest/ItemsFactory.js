function ItemsFactory() {
  return {
    makeBread: function () {
      return {
        name: "Bread",
        price: 1.25
      };
    },

    makeOatmeal: function () {
      return {
        name: "Oatmeal",
        price: 3.00
      };
    }
  }
}

module.exports = ItemsFactory;
