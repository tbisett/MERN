// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// inputs
// k = 16
// arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

// create new arrays
// if no matches, return empty array

// function findConsecutiveSums(arr, k) {
//     let newArr = [];
//     for (i = 0; i  < arr.length; i++) {
//         for(j = 1; j < arr.length; j++) {
//             if(arr[i] + arr[j] < k) {
//                 i++;
//                 j++;
//             } else if(arr[i] + arr[j] > k) {
//                 continue;
//             } else if(arr[i] + arr[j] === k) {
//                 newArr.push([arr[i] + arr[j]]);
//                 console.log(newArr);
//                 continue;
//             }
//         }
//     }
//     return newArr;
// }
function findConsecutiveSums(arr, k) {
    let len = arr.length, results = [], x = 0;
    let temp = [],tempSum = 0;
    while(x<len){ 
        for(let i = x; i<len; i++){
            // console.log(temp)
            if(tempSum+arr[i]<=k){
                tempSum+=arr[i]
                temp.push(arr[i])
                if(tempSum == k){
                    results.push([...temp])
                }
            }    
            else 
                break;          
        }
        // console.log(tempSum, k , temp)
        // if(tempSum == k)
        //     results.push(temp)
        tempSum = 0
        temp = [];
        x++
        
    }
    return results;
}

console.log(findConsecutiveSums([2,5,3,6,7,0,0,23,11], 16));
console.log(findConsecutiveSums([2,5,3,6,7,0,0,23,11], 10));
console.log(findConsecutiveSums([2,5,3,6,7,0,0,23,11], 21));