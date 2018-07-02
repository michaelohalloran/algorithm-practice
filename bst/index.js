// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        //this.data refers to data of the current node

        //if current node's data is larger, our new node should go to the left
        //this is the base case, when current node has no left child but our incoming data should become its left
        if(this.data > data && !this.left) {
            this.left = new Node(data);
        }
        //base case for right data (larger)
        if(this.data < data && !this.right) {
            this.right = new Node(data);
        }

        //if our data is less and current node has a left child, re-do the same process
        if(this.data > data && this.left) {
            this.left.insert(data);
        }

        //same for right hand values
        if(this.data < data && this.right) {
            this.right.insert(data);
        }

    }

    contains(data) {
        //base case
        if(this.data === data) {
            return this;
            //right hand case
        } else if(this.data < data && this.right) {
            return this.right.contains(data);
        } else if(this.data > data && this.left) {
            return this.left.contains(data);
        } else {
            return null;
        }
    }
}

module.exports = Node;
