// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    //make string into array
    let array = str.split('');
    let count = {};
    //loop through array, incrementing count variable
    for(let i = 0; i < array.length; i++) {
      //if count doesn't include a certain letter in array
      // if(!Object.keys(count).includes(array[i])) {
        if(count[array[i]] === undefined) {
        //push that letter in as a key, with value its count (start at 1)
        count[array[i]] = 1;
      } else {
        //if it does exist, increment its count
        count[array[i]]++;
      }
    }
    return Object.keys(count).reduce((a,b)=>count[a]>count[b] ? a : b);
    // return 
  }

module.exports = maxChar;
