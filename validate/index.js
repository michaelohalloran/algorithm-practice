// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {

    //base case for left (we've set a max (i.e., moved left))
    //and yet the current node is greater than max, it's not a BST
    if(max !== null && node.data > max) {
        return false;
    }

    if(min !== null && node.data < min) {
        return false;
    }

    if(node.left && !validate(node.left, min, node.data)) {
        return false;
    }

    if(node.right && !validate(node.right, node.data, max)) {
        return false;
    }

    //if all checks above are OK, it's a valid BST
    return true;

}

module.exports = validate;
