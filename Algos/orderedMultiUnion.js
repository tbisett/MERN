/* 
  Union Sorted Arrays
  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.
  Unions by default will take the set of dupes
  that has the highest occurrences from one array.
  Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const arr1 = [1, 2, 2, 2, 7];
const arr2 = [2, 2, 6, 6, 7];
const expected1 = [1, 2, 2, 2, 6, 6, 7];

const arrA = [1, 2, 2, 2, 7, 10, 15, 20];
const arrB = [2, 2, 6, 6, 7];
const expected2 = [1, 2, 2, 2, 6, 6, 7, 10, 15, 20];
/* 
  Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
  because it occurs 3 times at most in ONE set
*/

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n + m) linear, n = sortedA.length, m = sortedB.length because
 *  we may be pushing from only 1 array at a time while the other array's idx
 *  is staying in place. At worst, we push all items from 1 array when that
 *  array has all smaller items and then iterate through the 2nd array after.
 * - Space: O(n + m) where n = sortedA.length, m = sortedB.length because if
 *    there are no dupes all will be kept from both.
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */

// function orderedMultisetUnion(sortedA, sortedB) {
//     for(i = 0; i < sortedB.length )
//     var newArr = [...new Set([...sortedA, ...sortedB])];
//     let newArr = [];
//     let 
//     return newArr;
// }

function orderedMultisetUnion(sortedA, sortedB) {
    let flag1 = 0, flag2 = 0, unionArr = [];
    while (flag1 != sortedA.length || flag2 != sortedB.length) {
        if (sortedA[flag1] === sortedB[flag2]) {
            // console.log("they're equal")
            // console.log("this is pushed", sortedA[flag1])
            // console.log(sortedB[flag2])
            unionArr.push(sortedA[flag1]);
            // console.log(unionArr)
            flag1++;
            flag2++;
        } else if (sortedA[flag1] > sortedB[flag2]) {
            // console.log("flag2 smaller")
            // console.log(sortedA[flag1])
            // console.log("this is pushed", sortedB[flag2])
            unionArr.push(sortedB[flag2]);
            // console.log(unionArr)
            flag2++;
        } else {
            // console.log("flag1 smaller")
            // console.log("this is pushed", sortedA[flag1])
            // console.log(sortedB[flag2])
            unionArr.push(sortedA[flag1]);
            // console.log(unionArr)
            flag1++;
        }
    }
    return unionArr;
}

console.log(orderedMultisetUnion(arr1, arr2));
console.log(orderedMultisetUnion(arrA, arrB));