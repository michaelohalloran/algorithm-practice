// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let counters = [0];
    let arr = [root, 's'];
    while(arr.length > 1) {
        //pull first node off
        const first = arr.shift();
        //check if what we pulled off is the random string
        if(first === 's') {
            arr.push(first);
            counters.push(0);
        } else {
            //push its children into array
            arr.push(...first.children);
            //increment last value in counters;
            counters[counters.length - 1]++;
        }
    }
    return counters;
}

module.exports = levelWidth;
