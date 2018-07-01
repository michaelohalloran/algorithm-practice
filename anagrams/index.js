// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function makeCharMap(str) {
//   let strObj = {}
//   //remove all non letters and whitespace from string, lowercase it
//   let newStr = str.replace(/[^\w]/g, "").toLowerCase();

//   for(let char of newStr) {
//     strObj[char] = strObj[char]+1 || 1;
//   }
//   return strObj;
// }

// function anagrams(stringA, stringB) {
//     //make hash maps for each string:
//     let stringAObj = makeCharMap(stringA);
//     let stringBObj = makeCharMap(stringB);

//     console.log(stringAObj);
//     console.log(stringBObj);

//     //make arrays of each hash map's keys (letters)
//     let stringALetsArr = Object.keys(stringAObj);
//     let stringBLetsArr = Object.keys(stringBObj);

//     //check if array lengths are same to begin with? if not, can't be anagrams
//     if(stringALetsArr.length !== stringBLetsArr.length) {
//     return false;
//     } 

//     for(let char in stringAObj) {
//         console.log(`aChar is ${stringAObj[char]} for ${char} and bChar is ${stringBObj[char]}`);
//     //if value for a key/letter in A !== value in B, they can't be anagrams
//         if(stringAObj[char] !== stringBObj[char]) {
//             return false;
//         }
//     }
//     //if all prior checks didn't throw false, exit loop and return true (they match)
//     return true;
// }

function cleanString(str) {
    //clean it, split into array, sort, and rejoin as alphabetized string
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
  
  }

module.exports = anagrams;
