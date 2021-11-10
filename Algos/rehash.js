/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/
    Given to a Coding Dojo alumni by Riot games in 2021.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/

// 
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

// hints:
// parseInt(str)
// isNaN(x)
// myObj.hasOwnProperty("key")

// {b: 0}
// num =70
// hit a:
// {b: 0, a: 0}, reset num = 0 -> 70 is missing
function rehash2(str) {
    let obj = {}
    let num = 0;
    let prevLetter = str[0];
    // b70 num = {b: 70} -> a164 ->.
    for (var i = 0; i < str.length; i++) {
        // if the key str[i] not in obj, assign value 1 to it, or increase 1
        //obj[str[i]] = obj[str[i]] + 1 || 1
        if (isNaN(str[i])) {
            prevLetter = str[i];
            num = 0;
            if (!obj.hasOwnProperty(str[i])) {
                obj[str[i]] = 0;
            }
        } else {
            num = num * 10 + parseInt(str[i])
        // console.log(num);
            if (isNaN(str[i + 1])) obj[str[prevLetter]] += num;
    }

    // add key-value pair in obj
    return obj;
}
    //add in the last number to the object after the for loop
    // so something like obj[str[i-1]] += num
    //   return obj.sort({})
}
console.log(rehash2(str1));

// check if char is digit or not?

// num = 0, c
// b70
// num = 7
// num = 7 * 10 + 0  hit 0


// 164
// num = 0
// num = 1
// num 10 + 6 = 16
// num 160 + 4 = 164

// isnumeric() to check digit
// if it's character, store it as a key?
// if so, num = num * 10 + parseInt(c)


// check if char is digit or not?

// num = 0, c
// b70
// num = 7
// num = 7 * 10 + 0  hit 0


// 164
// num = 0
// num = 1
// num 10 + 6 = 16
// num 160 + 4 = 164

// isnumeric() to check digit
// if it's character, store it as a key?
// if so, num = num * 10 + parseInt(c)