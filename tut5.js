let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-z]/ig;
console.log("catStr",catStr.match(bgRegex));

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
console.log(result);