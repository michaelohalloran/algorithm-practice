// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     let newStr = '';
//     for(let i = str.length - 1; i >= 0; i --) {
//       newStr+= str[i];
//     }
//     return newStr;
// }

// function reverse(str) {
//     let newStr = str.split('').reverse().join('');
//     return newStr;
// }

function reverse(str) {
    //turn string into array
    //use reduce
    // debugger;
    return str.split('').reduce((reversed, currentLetter)=> {
      return currentLetter + reversed;
    }, '');
  }

//   reverse('apple');

module.exports = reverse;
