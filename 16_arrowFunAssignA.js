
console.log(`----------------------------------------------------------------step 1---------------------------------------------------------`);

const today = () =>{
console.log(`Good Morning,Today is Thusrday`);
}
today();

console.log(`----------------------------------------------------------------step 2---------------------------------------------------------`);

let result;
const multiplication = (num1,num2=1,num3=1) =>{
result=num1*num2*num3;
console.log(`Mutiplication of all No.s are : => ${result}`);
}
multiplication(5,5,2);
multiplication(10,4);


console.log(`----------------------------------------------------------------step 3---------------------------------------------------------`);

let resultSum;
const additionOfInput = (n1,n2,n3,n4,n5) =>{
resultSum=n1+n2+n3+n4+n5;
console.log(`Addition of values ${n1},${n2},${n3},${n4},${n5} =>`);
return resultSum;
}
let resultOfaddition;
resultOfaddition=additionOfInput(100,100,200,349,756)
console.log(`${resultOfaddition}`);
resultOfaddition=additionOfInput("I am"," learning"," ES6",' features'," in depth")
console.log(`${resultOfaddition}`);


console.log(`----------------------------------------------------------------End------------------------------------------------------------`);
