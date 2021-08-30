let petString = "James has a pet cat.btird";
let petRegx= /dog|CAT|bird|Fish/i; // "|" =  or and i = ignore case  
let result = petRegx.test(petString);//here test func will retrn boolean when matched in the String literal
console.log("petRegx", result);