let jennyStr = "Jenny8675309";
let jennyRegex = /[a-z0-9]/ig;
console.log("jenny",jennyStr.match(jennyRegex));

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line
console.log(result.length);