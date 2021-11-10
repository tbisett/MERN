/*
    Input: arr, callback
    Output: arr (with elements removed)
    Remove every element in the array, starting from idx 0,
    until the callback function returns true when passed the
    iterated element.
    Return an empty array if the callback never returns true
*/
const nums1 = [1, 4, 3, 6, 9, 3];
const callback1 = (elem) => {
    return elem > 5;
};
const expected1 = [6, 9, 3];

const nums2 = [1, 4, 3, 6, 9, 3];
const callback2 = (elem) => {
    return elem > 2;
};
const expected2 = [4, 3, 6, 9, 3];

const nums3 = [1, 4, 3, 6, 9, 3];
const callback3 = (elem) => false;
const expected3 = [];

// WITHOUT BUILT-IN FUNCTIONS
function dropIt1(arr, callback) {
    newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            for(let j = i; j < arr.length; j++) {
                newArr.push(arr[j]);
            }
            return newArr;
        }
    }
    return [];
}

console.log(dropIt1(nums1, callback1));
console.log(dropIt1(nums2, callback2));
console.log(dropIt1(nums3, callback3));

// WITH BUILT IN FUNCTION
function dropIt1(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            arr = arr.slice(i, arr.length)
            return arr;
        }
    }
    return [];
}

console.log(dropIt1(nums1, callback1));
console.log(dropIt1(nums2, callback2));
console.log(dropIt1(nums3, callback3));