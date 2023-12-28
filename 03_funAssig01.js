
console.log("--------------------------------------------------Step 1-------------------------------------------------------\n");

function addition()
{
    var n1=10;
    var n2=20;
    console.log("Values of: ");
    console.log("N1 =",n1,"\nN2 =",n2);
    var add=n1+n2;
    console.log("Addition of two values are=",add,"\n");
}
addition();

function Multiplication(){
    var m1=5;
    var m2=6;
    console.log("Values of: ");
    console.log("M1 =",m1,"\nM2 =",m2);
    var mult=m1*m2;
    console.log("Multiplication of two values are=",mult,"\n");
}
Multiplication();

console.log("--------------------------------------------------Step 2-------------------------------------------------------\n");

function personalDetails(firstName,lastName,collegeName){
    console.log("First Name :",firstName,"\nLast Name :",lastName,"\nCollege Name :",collegeName,"\n");
}
personalDetails("Bharat","Jadhav","Sangola College Sangola");

console.log("--------------------------------------------------Step 3-------------------------------------------------------\n");

function swapValues(sv1,sv2){
console.log("before swaping Values are :\n1st Value ->",sv1,"\n2nd Value ->",sv2,"\n");
var temp=sv1;
sv1=sv2;
sv2=temp;
console.log("After swaping Values are :\n1st Value ->",sv1,"\n2nd Value ->",sv2,"\n");
}
swapValues("Virat","Anushka");
swapValues(1000,2000);

console.log("--------------------------------------------------Step 4-------------------------------------------------------\n");

function addThreeValues(n1,n2,n3){
    console.log("First value ->",n1,"\nSecond value ->",n2,"\nThird value ->",n3);
    var addValue=n1+n2+n3;
    console.log("Addition of three values are :",addValue,"\n");
}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning");
