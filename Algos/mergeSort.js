// Array: Merge Sort
// visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
// multiple sorts, visualized: https://i.imgur.com/fq0A8hx.gif

// Time Complexity
//  - Best case: O(n log(n)
//  - Average case: O(n log(n))
//   - Worst case: O(n log(n))

// mergeSortedArrays(left, right)
// If r > l
//      1. Find the middle point to divide the array into two halves:
//              middle m = (l+r)/2
//      2. Call mergeSort for first half:
//              Call mergeSort(arr, l, m)
//      3. Call mergeSort for second half:
//              Call mergeSort(arr, m+1, r)
//      4. Merge the two halves sorted in step 2 and 3:
//              Call mergeSortedArrays(arr1, arr2)


// [88, 22, 44, 12, 99, 111, 9, 15, 49];
// [88, 22, 44, 12]     99, 111, 9, 15, 49
// 88, 22
// 88

// main recursive function that will be passed in mergeSortedArrays()
function mergeSort(arr) {
    // base case
    if (arr.length === 1) {
        return arr;
    }

    // logic
    middleIdx = arr.length / 2;
    leftHalf = arr.slice(0, middleIdx);
    rightHalf = arr.slice(middleIdx);

    // recurse
    // left = mergeSort(leftHalf)
    // right = mergeSort(rightHalf)
    // return mergeSortedArrays(left, right);
    return mergeSortedArrays(mergeSort(leftHalf), mergeSort(rightHalf));
}


// return a new sorted array with all of the values of leftArr and rightArr
// takes 2 sorted arrays and merges them together
// solve this first
//                       [2,5,9]      [4,6]
function mergeSortedArrays(leftArr, rightArr) {
    // setup
    let sortedArr = []
    let leftIdx = 0;
    let rightIdx = 0;
    // logic
    // checking lengths
    while(leftIdx != leftArr.length || rightIdx != rightArr.length) {
        if(leftArr[leftIdx] >= rightArr[rightIdx]) {
            // pushing to sortedArr
            sortedArr.push(rightArr[rightIdx]);
            rightIdx++;
        } else {
            sortedArr.push(leftArr[leftIdx]);
            leftIdx++;
        }
    }
    // return
    return sortedArr
}

// //steps:
//     1. create a mergeSortedArrays(leftArr, rightArr) function to merge two already sorted arrays into a single sorted array
//       - you do NOT need to work in place, ok to USE a new array
//     2. create mergeSort(arr) function to sort the provided array
//       - split the array into half and recursively merge the halves (run mergeSort on those 2 halves)
//       - splitting of arrays stops when array can no longer be split
//       - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array



//   useful methods
//   - var x = arr1.concat(array2, array3)
//     - combines array arg(s) with the array that concat is called on
//     - returns new arr w/o mutating originals


//   - arr.slice([begin[, end]])
//     - returns a copy of the specified portion of the array
//     - end is exclusive
//       - if omitted, slices from provided 'begin' to end of array

var arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
// var m = Math.floor(arr.length / 2)
// var l = arr.slice(0, m);
// var r = arr.slice(m, arr.length);










// function example() {
//     example();
// }

// example()


// 5!
// 5*4*3*2*1

// 3! 
// 3*2*1

// 2!
// 2*1

function factorial(num) {
    // 1. base case - break out!
    if (num === 1) {
        return 1;
    }
    // 2. logic
    // let numMunis1Fac = num -1;

    // 3. recursive call - return the function
    return num * factorial(num - 1);

}

// factorial(4);
// 4*3*2*1

console.log(mergeSort([88, 22, 44, 12, 99, 111, 9, 15, 49]));