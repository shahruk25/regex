// regex get repeated word;
let testString = "Repeat, Repeat, repeat";
let ourRegx = /Repeat/ig; // "g" = repeatation  or and i = ignore case  
let result = testString.match(ourRegx); // here match will retrn matched in the String literal
console.log("ourRegx", result.length);