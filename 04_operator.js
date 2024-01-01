
var num = 5;
var result = num % 2;
var resultValue = result == 0 ? " Given number is Even " : "It is Odd number"; 
console.log(resultValue);

var n1 = "100";
var n2 = 100;
var result = n1 == n2 ;
console.log(` Comparision using == operator ==> ${ result } `);


var result = n1 === n2 ;
console.log(` Comparision using === operator ==> ${ result } `);

var a=10;
var b=a++;      //postfix op
console.log(`${b}`);

var c=20;
var d= ++c;     //prefix op
console.log(`${d}`);

var result=0/0;  //NaN Not a Number
console.log(`${result}`);

var result=100+true;  //implicite conversion
console.log(`${result}`);

var resultValue=99-false;
console.log(`${resultValue}`);

console.log("1"+"1");

//Explicite string to num conversion '+'

var s1="101";
console.log(`${typeof s1}`);

var s2=+s1;
console.log(`${s2} and ${typeof s2}`);

var d=+"200";
console.log(`${d} and ${typeof d}`);

var z=+"Bharat";
console.log(`${z} and ${typeof z}`);  //NaN

var d=Number("101");
console.log(`${typeof d}`);

var s1="200A";
var res=Number(s1);
console.log(`${typeof res} ${res}`);

var p=Boolean(0);
console.log(`${p}`);