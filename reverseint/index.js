// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    //make the integer into a string, split into array
    //reverse array, put it back together as a number
    if(n < 0) {
      return Math.sign(n) * +Math.abs(n).toString().split('').reverse().join(''); 
    } else {
        return +n.toString().split('').reverse().join('');  
    }
  }

module.exports = reverseInt;
