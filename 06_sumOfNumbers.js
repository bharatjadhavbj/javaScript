

let sum=0;
for (let i = 1;i<=10; i++) {
sum=i+sum;
}
console.log(`Sum of no from 1 to 10 is ${sum}`);


//WAP to find the multiplication 1 to 5
let multiply=1;
for(let i=1;i<=5;i++){
multiply=multiply*i;
}
console.log(`multiply of numbers from 1 to 5 is ${multiply}`);



//reverse of string

// let str="Developer";
// let result ="";
// for (let index = str.length-1; index >=0; index--) {
//  result=result.concat(str.charAt(index));   
// }
// console.log(`Reverse of string is :${result}`);


console.log('=== Reading string char by char====');
let str = "Developer";
for (let index = 0; index < str.length; index++) {
    console.log(str.charAt(index)); 
}

let word = "Developer";
let result = "";
for (let index = word.length-1; index >=0; index--) {
     result = result + word.charAt(index); 
     //result = result.concat(word.charAt(index));
}
console.log(`Reverse string is: ${result}`);




