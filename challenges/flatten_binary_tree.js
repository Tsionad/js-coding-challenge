/*
 * @author: Tsion Adefres
 * @title: Flatten binary tree to a linked-list
 * @description: Simple function to convert binary tree into a linked list in-place
 */

/**
 * Assumption: return a tree node
 * Recursive approach: Traverse a (non-empty) binary tree in a pre-orderly manner to shift left nodes to right side while building nodes into a linked list
 * Time Complexity: O(n) 
 * Space Complexity: O(n) as space is proportional to height of the tree/number of nodes
 */
  
/*
 * https://en.wikipedia.org/wiki/Tree_traversal
 */

class BinaryTreeNode {
    constructor(value){
        this.value = value;
        this.left = this.right = null;
    }
}

/**
 * @param {BinaryTreeNode} node
 * @return {BinaryTreeNode}
 */

const flattenTree = node => {
    // Edge cases: return if node is null
    if (!node) return;
    if (!node.left && !node.right) return node; // or if it is a leaf node, then return node

    // Flatten left and right subtree recursively
    const left = flattenTree(node.left);
    const right = flattenTree(node.right);
  
    // Shift left node to right node 
    node.right = left;
    node.left = null;

    let current = node;
    while (current.right) {
      current = current.right;
    }
  
    current.right = right;
    return node;
}

// Utility function to print the linked-list
const printLinkedList = node => {
    const result = [];
    let current = node;
    result.push(current.value);

    while (current.right) {
        current = current.right;
        result.push(current.value);
    }
    return result;
};

const testFlattenedTree = () => {
  /* Build the tree   
          1
        /   \
       2     5
      /  \     \
     3    4     6 
   */
  const root = new BinaryTreeNode(1);
  root.left = new BinaryTreeNode(2);
  root.right = new BinaryTreeNode(5);
  root.left.left = new BinaryTreeNode(3);
  root.left.right = new BinaryTreeNode(4);
  root.right.right = new BinaryTreeNode(6);

  flattenTree(root);
  console.log(printLinkedList(root)); // [1, 2, 3, 4, 5, 6]
};

// Un-comment if testing by implementing testFlattenedTree() 
console.log(testFlattenedTree());

// npx jest challenges/flatten_binary_tree.js
describe('flatten a binary search tree', () => {
    it('should flatten a bst to a linked list', () => {
        const root = new BinaryTreeNode(1);
        root.left = new BinaryTreeNode(2);
        root.right = new BinaryTreeNode(5);
        root.left.left = new BinaryTreeNode(3);
        root.left.right = new BinaryTreeNode(4);
        root.right.right = new BinaryTreeNode(6);

      flattenTree(root);
      expect(printLinkedList(root)).toEqual([1,2,3,4,5,6]);
    });
    it('should flatten a bst to a linked list', () => {
        const root = new BinaryTreeNode(10);
        root.left = new BinaryTreeNode(5);
        root.right = new BinaryTreeNode(15);
        root.left.left = new BinaryTreeNode(2);
        root.left.right = new BinaryTreeNode(3);
        root.right.left = new BinaryTreeNode(12);
        root.right.right = new BinaryTreeNode(17);
        root.left.left.left = new BinaryTreeNode(7);

        flattenTree(root);
        expect(printLinkedList(root)).toEqual([10, 5, 2, 7, 3, 15, 12, 17]);
    });
});
  