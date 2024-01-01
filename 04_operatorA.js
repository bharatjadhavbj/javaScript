
console.log("--------------------------------------------------Assign 1-------------------------------------------------------\n");

function squareOfWordLength(str1){
    var str2=str1.length;
    console.log(`Given Sting is "${str1}"`);
    return(str2*str2);
    
}
var square=squareOfWordLength("JavaScript");
console.log(`Square of word "JavaScript" length is ${square} \n`);

var square=squareOfWordLength("Google Chrome");
console.log(`Square of word "Google Chrome" length is ${square} \n`);

var square=squareOfWordLength("Developer Smart");
console.log(`Square of word "Developer Smart" length is ${square} \n`);

console.log("--------------------------------------------------Assign 2-------------------------------------------------------\n");

function calculateLength(){
    var str1="I am Angular Developer";
    var strLength=str1.length;
    var totalWords=str1.split(" ").length;
    
    console.log(`Given String "I am Angular Developer" Length is : ${strLength}\nAnd Total number of words are : ${totalWords} \n `);

    var divide=strLength/totalWords;
    console.log(`Result of Dividation : ${divide}`);

    var resultMulti=strLength*totalWords;
    console.log(`Result of Multiplication : ${resultMulti}\n`);
}
calculateLength();

console.log("--------------------------------------------------End------------------------------------------------------------\n");
