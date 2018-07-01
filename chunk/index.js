// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     //make empty outer array to push into
//     let outerArr = [];
//     //consume the array using splice
//     while(array.length > 0) {
//         //take splices of length size (the parameter)
//       let subArr = array.splice(0,size);
//       //push them into our outer array
//       outerArr.push(subArr);
//     }
//     return outerArr;
//   }

//HIS SOLUTION 1:
// function chunk(array, size) {
//     //this will hold the "chunks" of sub-arrays
//     const chunked = [];
//     for(let el of array) {
//         //get the last array in chunked
//       let last = chunked[chunked.length -1];
      
//       //if there isn't a last item, or if it's full (i.e., its length = size)
//       if(!last || last.length === size) {
//           //then push a new array into chunked consisting of our current loop element
//         chunked.push([el]);
//       } else {
//           //if there is a last item and it's not full, push our current el in
//         last.push(el);
//       }
//     }
//    return chunked; 
//   }

//HIS SOLUTION #2
function chunk(array, size) {
    const chunked = [];
    let index = 0;

    while(index < array.length) {
        chunked.push(array.slice(index, index+size));
        index += size;
    }
    return chunked;
}


module.exports = chunk;
