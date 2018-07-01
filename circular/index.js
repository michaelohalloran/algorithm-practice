// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    let slow = list.head;
    let fast = list.head;

    //run this as long as fast has 2 nodes after it
    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        //if slow and fast point to same node, it's circular
        if(slow === fast) {
            return true;
        }
        
    }
    return false;
}

module.exports = circular;
