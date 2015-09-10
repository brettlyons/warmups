var myObj = {
  someState: 'This is the state of myObj',
  func: function foo() {
    this.someState = 'awesome whatever bar foo metasyntactical arbitrary';
  },
};
console.log(myObj.someState);
myObj.func();
console.log(myObj.someState);
// console.log(foo());

