class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addFirst(data) {
    this.head = new Node(data);
    this.size++;
  }
}

const ll = new LinkedList();

ll.addFirst("10");
ll.addNext("30");

console.log("LL", ll);
