// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        //add new node to the current node's children array
        this.children.push(new Node(data));
    }

    remove(data) {
        //look in current node's children, remove node which has the same data
        //as what we're passing in

        this.children = this.children.filter(node=> {
            return node.data !== data;
        });     

        // for(let child of this.children) {
        //     if(child.data === data) {
        //         this.children.splice(child);
        //     }
        // }
    }
}

class Tree {
    constructor(root = null) {
        this.root = root;
    }

    traverseBF() {
        //go left to right, calling siblings
    }
    traverseDF() {
        //get to bottom of tree, calling children
    }
}

module.exports = { Tree, Node };
