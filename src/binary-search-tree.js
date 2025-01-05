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
    // console.log(data);
    // if (data === null || data === undefined) {
    //   return this.rootMyHead;
    // } else if (typeof data !== "number") {
    //   return this.rootMyHead;
    // }
    if (!this.rootMyHead) {
      this.rootMyHead = new Node(data);
      return this.rootMyHead;
    } else {
      return (this.rootMyHead = this.addedNote(this.rootMyHead, data));
    }
  }

  addedNote(node, data) {
    if (data < node.data) {
      // this.node = node.left;
      if (!node.left) {
        node.left = new Node(data);
        return node;
      } else {
        this.addedNote(node.left, data);
        // node.left = this.addedNote(node.left, data);
        return node;
      }
    } else if (data > node.data) {
      if (!node.right) {
        node.right = new Node(data);
        return node;
      } else {
        this.addedNote(node.right, data);
        // node.right = this.addedNote(node.right, data);
        return node;
      }
    }
    return node;
  }

  has(data) {
    // if (data === null || data === undefined) {
    //   return false;
    // }
    return this.find(data) ? true : false;
  }

  find(data) {
    const sarder = this.rootMyHead;
    return findNode(sarder, data);
    function findNode(node, findValue) {
      if (!node) {
        return null;
      }
      // else {
      //   return node;
      // }
      if (node.data === findValue) {
        return node;
      }
      if (findValue < node.data) {
        return findNode(node.left, findValue);
      } else {
        return findNode(node.right, findValue);
      }
    }
  }

  remove(data) {
    return this.removeNode(this.rootMyHead, data);
  }

  removeNode(node, value) {
    if (!node) {
      return null;
    }
    if (value < node.data) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.data) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        node = node.right;
        return node;
      }
      if (!node.right) {
        node = node.left;
        return node;
      }
      // const minNode = this.min(node.right);
      // const minNode = this.findMin(node.right);
      // node.data = minNode.data;
      // node.right = this.removeNode(node.right, minNode.data);

      const maxNode = this.findMax(node.left);
      node.data = maxNode.data;
      node.left = this.removeNode(node.left, maxNode.data);
      return node;
    }
  }

  findMin(node) {
    let minNode = node;
    while (minNode.left) {
      minNode = minNode.left;
    }
    return minNode;
  }

  findMax(node) {
    let maxNode = node;
    while (maxNode.right) {
      maxNode = maxNode.right;
    }
    return maxNode;
  }

  min() {
    return this.findMin(this.rootMyHead).data;
  }

  max() {
    let msxCheck = this.rootMyHead;
    while (msxCheck.right) {
      msxCheck = msxCheck.right;
    }
    return msxCheck.data;
  }
}

module.exports = {
  BinarySearchTree
};