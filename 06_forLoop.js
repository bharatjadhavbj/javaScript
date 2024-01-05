
//0 to 10 number prints.

for (var index =0; index <=10; index++) {
    console.log(index);
}

console.log(`2 ,4, 6, 8, 10 number prints.`);  
for (let index = 2; index <=10 ; index=index+2) {
    console.log(index);
}

for (let index = 10; index >=1; index--) {
    console.log(index);
}

for (let index = 50; index >=40; index--) {
    console.log(index);
}

console.log(`table of 5`);  

for (let index = 5; index <=50 ; index=index+5) {
    console.log(index);
}

console.log(`========= Example of Infinite loop==============`);
// for (let index = 5; index < 10; index--) {
//    console.log(index); // 5 4 3 2 1 0 ----------
// }



var count=1;
for (let index = 1; count<=15; index=index +2) {
    console.log(index);
    count++;
1  }