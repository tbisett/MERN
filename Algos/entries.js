/* 
  Recreate Object.entries() method
  Given an object,
  return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
  Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
    name: "Pizza",
    calories: 9001,
};
const expected1 = [
    ["name", "Pizza"],
    ["calories", 9001],
];

const obj2 = {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
};
const expected2 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13],
];

//   obj1.__proto__ = obj2;

// function entries(obj) { 
//     newArr = [];
//     let Key = Object.keys(obj);
//     let Val = Object.values(obj);
//     for(var value in obj) {
//         let arr = [];
//         // let arr2 = [];
//         arr.push(value);
//         newArr.push(arr);
//         for (var value in Val) {
//             let arr1=[];
//             arr1.push(value);
//             newArr.push(arr1);
//         }
        
//     }

//     return newArr;

// }



function entries(obj) {
    let finalArr = []

    for (let key in obj) {
        console.log(obj[key]);
        finalArr.push([key, obj[key]]);

        
    }
    return finalArr;
}

console.log(entries(obj1));




// ==================================================

/* 
  Given a table name string and an object whose key value pairs represent column names and values for the columns
  return a SQL insert statement string
  Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it easy to add variables into a string or to add quotations without needing to escape them.
  Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expectedA =
    "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
};
const expectedB =
    "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
// Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.

function insert(tableName, columnValuePairs) { }