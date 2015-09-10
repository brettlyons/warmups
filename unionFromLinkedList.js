function LinkedList(head) {
  this.head = head;
}

function Node(data, next) {
  this.data = data;
  this.next = next;
}

function commonDataBetweenLists(list1, list2) {
  function go(list1, currData, output) {
    console.log('ifhead list1 data:', list1.data, list1.next);
    console.log('currdata', currData);
    if(list1.data == currData) {
      output.push(list1.data);
    }
    if(!list1.next) {
      return output;
    }
    return go(list1.next, currData, output);
  }
  while(!list2.next) {
    return go(list1.head, list2.head.data, [])
    list2.data = list2.data;
  }
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
//

