class Node {
  constructor(value) {
    this._value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._length = 0;
  }

  // Insert first node (Head)
  insertFirst(value) {
    const newNode = new Node(value);
    newNode.next = this._head;
    this._head = newNode;
    this._length++;
  }

  // Insert last node (Tail)
  insertLast(value) {

    // Don't assume the list isn't empty.
    if (!this._head) {
      this.insertFirst(value);
      return;
    }

    const newNode = new Node(value);
    let current = this._head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
    this.length++;
  }

  // Insert at index
  insertAt(value, index) {
    if (index > this._length) {
      return;
    }

    if (index === 0) {
      this.insertFirst(value);
      return;
    }

    const newNode = new Node(value);
    let current, previous;
    current = this._head;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    newNode.next = current;
    previous.next = newNode;
    this._length++;
  }

  // Get at index
  getAt(index) {
    let current = this._head;
    let count = 0;
    while (current) {
      if (count === index) {
        console.log(current._value);
        break;
      }
      count++;
      current = current.next;
    }
    return null;
  }

  // Remove at index
  removeAt(index) {
    if (index >= this._length) {
      return;
    }

    let current = this._head;
    let previous;
    let count = 0;

    if (index === 0) {
      this._head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }

    this._length--;
  }

  // Print list data
  printListData() {
    let current = this._head;
    let list = '';
    let separator = '';

    while (current) {
      list += separator + current._value;
      current = current.next;
      separator = ' ';
    }

    console.log(list);
  }

  // Clear list
  clearListData() {
    this._head = null;
    this._length = 0;
  }
}

const list = new LinkedList();

list.insertLast(100);
list.removeAt(1);  // Nothing to remove
list.insertFirst(200);
list.insertFirst(300);
list.insertLast(50);
list.insertLast(10);
list.insertAt(500, 2);
list.insertAt(600, 4);

list.removeAt(2);
list.removeAt(0);

// list.clearListData();
list.printListData();
list.getAt(2);
list.getAt(0);
