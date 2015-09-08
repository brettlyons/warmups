function Node( data, next ) {
  this.data = data;
  this.next = next || null; // type node
}

function LinkedList( head ) {
  if (head) {
    if(head.head) {
      head = head.head;
    }
  }
  this.head = head; // head better be a node, else LinkedList.length() is f'd.
  //that = this;
  //return {
    //setHead: function (head) {
      //that.head = head;
    //}
  //}

}

LinkedList.prototype.pop = function () {
    tmpHead = this.head;
    this.head = this.head.next;
    return tmpHead.data;
}

LinkedList.prototype.push = function ( data ) {
  this.head = (this.head == undefined)
    ? new Node(data, null)
    : new Node(data, this.head);
}


LinkedList.prototype.length = function() {
  function go( currHead ) {
    return ( !currHead.next ) ? 1 : 1 + go(currHead.next);
  }
  return go(this.head);
}

// problems with LinkedList:
// 1. reverse a linked list
// 2. insert at kth index, LinkedList.insertAtIndex(node, index);
// 3. CHALLENGE QUESTION -- reimplement LinkedList w/ encapsulation, setHead method.
// 4. DOUBLE CHALLENGE -- SAME THING: but for Node, setNext, removeNext.
var myFreshList = new LinkedList();
myFreshList.push("first");
myFreshList.push("second");
myFreshList.push("third");
myFreshList.push("fourth");
console.log(myFreshList);
console.log(myFreshList.length());

LinkedList.prototype.reverse = function () {
  var list = new LinkedList(this);
  var tmpList = new LinkedList();
  while(list.head.next) {
    tmpList.push(list.pop())
  }
  tmpList.push(list.pop());
  return tmpList;
}

console.log(myFreshList.reverse());
console.log("oOOoo", myFreshList)  // it used to eat the list!

LinkedList.prototype.insertAtIndex = function(node, index) {
  var currentNode = this.head;
  function go(counter, currNode) {
    if(counter == index) {
      node.next = currNode.next;
      currNode.next = node;
      return;
    }
    return go(counter+1, currNode.next)
  }
  return go(0, currentNode);

}
var kazerp = new Node("Nonth", null)
myFreshList.insertAtIndex(kazerp, 1); // if you want to replace the head, use push();
console.log("....", myFreshList);

