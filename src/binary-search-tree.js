const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootMyHead = null;
  }

  root() {
    // console.log(this.root);
    return this.rootMyHead;
  }

  add(data) {
    console.log(data);
    if (data === null || data === undefined) {
      return this.rootMyHead;
    } else if (typeof data !== "number") {
      return this.rootMyHead;
    }
    if (!this.rootMyHead) {
      this.rootMyHead = new Node(data);
      return this.rootMyHead;
    } else {
      return (this.rootMyHead = this.addedNote(this.rootMyHead, data));
    }
  }

  addedNote(node, data) {
    if (data < node.value) {
      // this.node = node.left;
      if (!node.left) {
        node.left = new Node(data);
        // return node;
      } else {
        this.addedNote(node.left, data);
        // node.left = this.addedNote(node.left, data);
        // return node;
      }
    } else if (data > node.value) {
      if (!node.right) {
        node.right = new Node(data);
        // return node;
      } else {
        this.addedNote(node.right, data);
        // node.right = this.addedNote(node.right, data);
        // return node;
      }
    }
    return node;
  }

  has(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};