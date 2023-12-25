const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor () {
  //constructor (contents = []) {
    //this.queue = []
    this.first = null
    this.tail = null
  }

  getUnderlyingList() {
    return this.first
  }

  enqueue(item) {
    let newNode = {value: item, next: null }
    //this.queue.length === 0
    if (!this.first) {
      //this.queue.push({item: item, next: null })
      this.first = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
      //const newItem = {item: item, next: null }
      //const lastItem = this[this.queue.length - 1]
      //lastItem.next = newItem
      //this.queue.push(newItem)
    }
  }

  dequeue() {
    if (!this.first) {
      return null
    }
    const removN = this.first
    this.first = this.first.next
    if (!this.first) {
      this.tail = null
    }
    return removN.value
    //const firstItem = this.queue[0]
    //this.queue = this.queue.slice(1)
    //return firstItem
  }
}

module.exports = {
  Queue
};
