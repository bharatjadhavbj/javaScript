
console.log("--------------------------------------------------Step 1-------------------------------------------------------\n");

var isEvenOrOdd = function (num) {
    var returnValue = "";
    if (num % 2 == 0) {
      returnValue = "EVEN";
    } else {
      returnValue = "ODD";
    }
    return returnValue;
  };
  var result;
  result = isEvenOrOdd(45);
  console.log(`Given number 45 is ${result}`);
  
  result = isEvenOrOdd(70);
  console.log(`Given number 70 is ${result}`);

  result = isEvenOrOdd(67);
  console.log(`Given number 67 is ${result}`);

  result = isEvenOrOdd(98);
  console.log(`Given number 98 is ${result}`);

console.log("--------------------------------------------------Step 2-------------------------------------------------------\n");

 var isEligibleForVote = function(age){
  var eligibility="";
  if (age>=18) {
    eligibility="Person is eligible for vote"; 
  } else {
    eligibility="Person is Not eligible for vote";
  }  
  return eligibility;
 }
var result;
result=isEligibleForVote(18);
console.log(`${result}\n`);
  
result=isEligibleForVote(20);
console.log(`${result}\n`);

result=isEligibleForVote(17);
console.log(`${result}\n`);

result=isEligibleForVote(40);
console.log(`${result}\n`);

console.log("--------------------------------------------------Step 3-------------------------------------------------------\n");
 
var checkStrLength=function(str){
var strLen=str.length;
  if (strLen>10) {
  console.log(`String "${str}" contains more than 10 character\n`);
  } else {
  console.log(`String "${str}" does not contains more than 10 character\n`);
 }
}

checkStrLength("JavaScript-ES6");
// checkStrLength("Developer");

console.log("--------------------------------------------------Step 4-------------------------------------------------------\n");

var checkStart=function(word){
  if (word.startsWith("Java")) {
    console.log(`Given string '${word}' is starts with 'Java'\n`);
  } else{
    console.log(`Given string '${word}' does not starts with 'Java'\n`);

  }
  
}
checkStart("JavaScript Langauge");

console.log("----------------------------------------------------End--------------------------------------------------------\n");
