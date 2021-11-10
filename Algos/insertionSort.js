/*
    - Visualization with playing cards (scroll down):
        https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
    - Array / bar visualization:
        https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
    - Stable sort, efficient for small data sets or mostly sorted data sets.
    Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    - this sort splits the array into two portions (conceptually, not literally).
    - the left portion will become sorted, the right portion
        (that hasn't been iterated over yet) is unsorted.
    // can shift OR swap target element until it reaches desired position
    // shifting steps:
    1. consider the first item as sorted
    2. move to the next item
    3. store current item in a temp var (to make this position available to shift items)
    4. if item to the left of current is greater than current item, shift the
        left item to the right.
    5. repeat step 4 as many times as needed
    6. insert current item
    7. move to the next item and repeat
    // swap steps:
    1. consider the first item as sorted
    2. move to the next item
    4. if item to left of current item is less than current, swap
    5. repeat step 4 until item to left is less than current item
    6. move to next item and repeat
*/

function insertionSort(arr) {
    // BASE CASE IF ARR IS TOO SHORT OR EMPTY
    if(arr.length < 2) {
        return arr;
    }
    for(let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        // MOVE ELEMENTS OF ARR THATA RE GREATER THAN THE KEY, TO ONE AHEAD OF
        // THEIR CURRENT POSITION
        while( j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// insertionSort2([3,5,2,1,0])
// insertionSort2([3,0])
// insertionSort2([0])
// insertionSort2([])
// insertionSort2([1,2,3,4,5])
// insertionSort2([5,4,3,2,1])
// insertionSort2([5,4,0,2,1])

console.log(insertionSort([3,5,2,1,0]))
console.log(insertionSort([3,0]))
console.log(insertionSort([0]))
console.log(insertionSort([]))
console.log(insertionSort([1,2,3,4,5]))
console.log(insertionSort([5,4,3,2,1]))
console.log(insertionSort([5,4,0,2,1]))