// given two sorted arrays that may have duplicate values, merge them and remove any duplicates

var arr1 = [1, 3, 3, 5, 8, 10,];
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

function mergeDedupe(arr1, arr2) {
    let mergedArr = arr1.concat(arr2);
    const result = mergedArr.filter((item, idx) => mergedArr.indexOf(item) === idx);
    return result;
    
}


console.log(mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5])) // [ 1, 3, 4, 5, 8, 10 ]
console.log(mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6])) // [1, 2, 3, 4, 5, 6, 8, 10, 12]



// given two sorted arrays that may have duplicate values, merge them and remove any duplicates

// var arr1 = [1, 3, 3, 5, 8, 10,];
// var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

// function mergeDedupe(arr1, arr2) {
//     let mergedArr = [];

//     for(let i = 0; i < arr1.length; i++) {
//         if(mergedArr.indexOf(arr1[i] === -1)) {
//             mergedArr.push(arr1[i]);
//         }
//     }
//     for(let i = 0; i < arr2.length; i++) {
//         if(mergedArr.indexOf(arr2[i]) === -1) {
//             mergedArr.push(arr2[i]);
//         }
//     }
//     return mergedArr;
// }



// console.log(mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5])) // [ 1, 3, 4, 5, 8, 10 ]
// console.log(mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6])) // [1, 2, 3, 4, 5, 6, 8, 10, 12]