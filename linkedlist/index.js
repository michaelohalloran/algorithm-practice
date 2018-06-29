// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
        // const newNode = new Node(data, this.head);
        // this.head = newNode;
    }

    size() {
        let nodeCount = 0;
        //this is our head node
        let node = this.head;

        //while there's a node, increment the count, reassign node to be the next node
        //this continues as long there is a next node
        while(node) {
            nodeCount++;
            node = node.next;
        }
        return nodeCount;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if(!this.head) {
            return null;
        }
        let currentNode = this.head;
        while(currentNode) {
        //   console.log('current is: ');
        //   console.log(currentNode);
            if(!currentNode.next) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if(!this.head) {
            return;
        }
        //make head node into the second, thereby removing the first
        this.head = this.head.next;
    }

    removeLast() {
        //if there's no node at all, don't run it
        if(!this.head) {
          return;
          //if there's only node, remove it, since it's the last
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        //previous starts as 1st node
        let previous = this.head;
        //current start as 2nd node
        let current = this.head.next;
        //while there's a current node
        while(current.next) {
          //if current has no next node, it's the last one, so remove it
        //   if(!current.next) {
        //     previous.next = null;
        //   }
          //otherwise keep reassigning
            previous = current;
            current = current.next;
        }
        previous.next = null;
      }
    insertLast(data) {
        const last = this.getLast();

        //if there is a last node, make its next prop be our new node
        if(last) {
            last.next  = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

    getAt(index) {
        // if(!this.head) {
        //     return null;
        // }
        let counter = 0;
        let node = this.head;
        // console.log(node);

        //MY SOLUTION:
        // while(index !== counter) {
        //     // if(!node.next) {
        //     //     return;
        //     // }
        //     node = node.next;
        //     counter++;
        // }
        // return node;

        while(node) {
            if(counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }

    removeAt(index) {
        if(!this.head) {
            return null;
        }

        //MINE:
        // let nodeToRemove = this.getAt(index);
        // let previous = this.getAt(index - 1);
        // let next = this.getAt(index + 1);

        // //to handle it being the last node (i.e., it has no next)
        // if(previous && !next) {
        //     previous.next = null;
        // } 
        // //if it's the first node
        // if(!previous && next) {
        //     this.head = next;
        // }

        // if(previous && next) {
        //     previous.next = next;
        // }

        //HIS:
        //for 1-item list, or if we want to remove first item:
        if(index===0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index-1);
        //if there's no previous or we're at the last node
        if(!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;

    }

    insertAt(data, index) {
        let newNode = new Node(data);
        //if list is empty, make new node the first
        if(!this.head) {
            this.head = newNode;
            return;
        }
        //if trying to insert at index 0 (so there's no previous)
        if(index === 0) {
            this.insertFirst(data);
            return;
        }
        //get prior and next nodes
        let previous = this.getAt(index - 1);
        let next = this.getAt(index);
        //if there's no next (trying to insert as last, or out of bounds)
        if(!next) {
            this.insertLast(data);
            return;
        }
        //wire previous to incoming node
        previous.next = newNode;
        //wire incoming to next
        newNode.next = next;
    }
    // forEach() {}

}

module.exports = { Node, LinkedList };
