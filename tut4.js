    // Match Single Character with Multiple Possibilities
let bigStr1 = "big";
let bagStr2 = "bag";
let bugStr3 = "bug";
let bogStr4 = "bog";
let bgRegex = /b[aeiou]g/;
console.log("bigStr1",bigStr1.match(bgRegex));
console.log("bigStr2",bagStr2.match(bgRegex));
console.log("bigStr3",bugStr3.match(bgRegex));
console.log("bigStr4",bogStr4.match(bgRegex));

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
console.log(result);