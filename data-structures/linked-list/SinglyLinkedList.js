// Linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    if (value instanceof Array) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      for (let item of value) {
        this.push(item);
      }
    } else {
      this.head = value ?? null;
      this.tail = value ?? null;
      this.length = value == null || value == undefined ? 0 : 1;
    }
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }

    return ++this.length;
  }
}

const linkedList = new LinkedList([0, 1, '']);
console.log(linkedList.push('🥑'));
console.log(linkedList);
