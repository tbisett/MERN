/* 
    https://visualgo.net/en/sorting
    Selection sort works by iterating through the list, finding the minimum
    value, and moving it to the beginning of the list. Then, ignoring the first
    position, which is now sorted, iterate through the list again to find the
    next minimum value and move it to index 1. This continues until all values
    are sorted.
    Unstable sort.
    Time Complexity
        - Best: O(n^2) quadratic.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic.
    Space: O(1) constant.
    Selection sort is one of the slower sorts.
        - ideal for: pagination, where page 1 displays 10 records for example,
        you run selection sort for 10 iterations only to display the first 10
        sorted items.
*/
const myArr = [3,2,9,5,1,4,8]

function selectionSort(arr){
    for (let i = 0; i < arr.length-1; i++){ // Starting at the beginning of the array
        let min = i; // Setting the min to the first index (incrementing) 

        for (let j = i + 1; j < arr.length; j++){ // Iterating through the array starting with the value after i
            if( arr[min] > arr[j]){ // Comparing the min to the current index value 
                min = j; // If true we set the min to the value at j 
            }
        }
        if (min!= i) [arr[min], arr[i]] = [arr[i], arr[min]]; // Swapping the values in the fancy way
        // if( min != i ){
        //     let temp = arr[i];
        //     arr[i] = arr[min];
        //     arr[min] = temp;
        // }
    }
    return arr;
}


console.log(selectionSort(myArr));

