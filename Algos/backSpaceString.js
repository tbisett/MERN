/* 
 ██╗ ██╗ 
████████╗
╚██╔═██╔╝
████████╗
╚██╔═██╔╝
 ╚═╝ ╚═╝ 
         
    Given two 🎻 strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    👉 # character means a backspace character.
    i.e., after processing the backspaces, are the two strings equal?
    Bonus: solve in O(n) time
*/


const S1 = "aclp";
// a -> ab -> a -> ac
const T1 = "ad#clp";
// a -> ab -> a -> ac
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "ab##";
// a -> ab -> a -> 
const T2 = "c#d#";
// c ->  -> d -> 
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
// a ->  ->  -> c
const T3 = "#a#c";
//  -> a ->  -> c
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
// a ->  -> c
const T4 = "b";
// b
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

// function backspaceStringCompare(S, T) {
//     let dumpster = [];
//     let sArr = [];
//     let tArr = [];

    
//     if(S.length || T.length === 0) {
//         return null;
//     }
//     for( i=0; i < S.length; i++) {
//         if(S[i] === "#") {
//             dumpster.push(S[i] && S[i] - 1);
//             return dumpster
//         }
//     }
//     for(j=0; j< T.length; j++) {
//         if(T[j] ==="#") {
//             dumpster.push(T[j] && T[j] - 1);
//             return dumpster
//         }
//     }
//     if( S === T) {
//         return true;
//     } else {
//         return false
//     }
    
//     console.log(S, T)
// }


function backspaceStringCompare(S, T) {
    let dumpster = [];
    let sArr = [];
    let tArr = [];
    S.slice(0);
    console.log(S);
    sArr.push(S);
    console.log(sArr);
}

console.log(backspaceStringCompare(S1, T1))
// console.log(backspaceStringCompare(S2, T2))
// console.log(backspaceStringCompare(S3, T3))
// console.log(backspaceStringCompare(S4, T4))