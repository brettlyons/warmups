var myBankAccount = {
  accountHolder: "Emily",
  checkingBalance: 100,
  savingsBalance: 200,
  addToChecking: function ( amnt ) {
    amnt > 0 ? this.checkingBalance += amnt :
      console.log("Cannot deposit non-negative amount.");
  }

  rmFromChecking: function ( amnt ) {
    this.checkingBalance > amnt ? this.checkingBalance += amnt :
      console.log("removal request value higher than quantity in balance.");
  }
};
