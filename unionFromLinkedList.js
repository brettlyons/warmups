function LinkedList(head) {
  this.head = head;
}

function Node(data, next) {
  this.data = data;
  this.next = next;
}

function commonDataBetweenLists(list1, list2) {
  var output = [];
  var l2Invariant = list2.head;
  while(list1.head) {
    while(list2.head) {
      console.log("list head data", list1.head.data);
      console.log('list 2 head data', list2.head.data);
      console.log(list1.head.data == list2.head.data);
      if ( list1.head.data == list2.head.data ) {
        output.push(list1.head.data);
      }
      list2.head = list2.head.next;
    }
    list1.head = list1.head.next;
    list2.head = l2Invariant;
  }
  return output;
}
var l1 = new LinkedList(new Node('This is the head'));
var foo = new Node('fooski');
var bar = new Node('barski');
l1.head.next = foo;
foo.next = bar;

var l2 = new LinkedList(new Node('something cool!'));
var goo = new Node('gooski');
var bar2 = new Node('barski');
l2.head.next = bar2;
bar2.next = goo;

console.log(commonDataBetweenLists(l1, l2));
// ['barski']
