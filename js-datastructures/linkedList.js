// provides a linked list class for implementing stacks and queues
// needs 3 methods, push, pop, addToTail

function Node(data, next) {
  return {
    data: data,
    next: next
  };
}

function LinkedList(headData) {
  if(!headData) { throw "LinkedList requires initial value"; } 
  this.head = new Node(headData, null);
  this.last = this.head;
}

LinkedList.prototype.push = function (newData) {
  this.head = new Node(newData, this.head);
};

LinkedList.prototype.pop = function () {
  var freedData = this.head.data;
  this.head = this.head.next;
  return freedData; 
};

LinkedList.prototype.addToTail = function (newData) {
  this.last.next = new Node(newData, null);
  this.last = this.last.next;
};


var tmpLL = new LinkedList("one");
// new up a linked list
console.log(JSON.stringify(tmpLL, null, 4));
// add an element to the linked list, aka PUSH
tmpLL.push("two");
console.log(JSON.stringify(tmpLL, null, 4));
// add another element to the LL, push again
tmpLL.push("three");
console.log(JSON.stringify(tmpLL, null, 4));
// Remove the head of the list aka POP
console.log("Popped off head: ", JSON.stringify(tmpLL.pop(), null, 4));
console.log(JSON.stringify(tmpLL, null, 4));

// add something to the tail of the list
tmpLL.addToTail("pizza");
console.log(JSON.stringify(tmpLL, null, 4));
