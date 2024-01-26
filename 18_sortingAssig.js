const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];

console.log(`----------------------------------------------------------------step 1---------------------------------------------------------`);

console.log(`original Array : [${arrayRollNumbers}]`);
console.log(`Reverse array : [${arrayRollNumbers.reverse()}]`);

console.log(`----------------------------------------------------------------step 2---------------------------------------------------------`);

// const arrayRollNumbers0 = [113,45,56,11,32,45,109,799,56,45];
// console.log(`original Array : [${arrayRollNumbers0}]`);
// const sortedArray = arrayRollNumbers0.sort();
// console.log(sortedArray);

 console.log(`Using sort() : [${arrayRollNumbers.sort()}]`);

console.log(`----------------------------------------------------------------step 3---------------------------------------------------------`);

arrayRollNumbers.sort((num1,num2)=>{
     return num1>num2?1:-1;
    });
console.log(`Sorted array in ascending order : [${arrayRollNumbers}]`);

console.log(`----------------------------------------------------------------step 4---------------------------------------------------------`);

const arrayRollNumbers1 = [113,45,56,11,32,45,109,799,56,45];
arrayRollNumbers1.sort((num1,num2)=> {
    return num1 > num2 ? 1 : -1;
});
console.log(`Greatest no from the array : ${arrayRollNumbers1[arrayRollNumbers1.length-1]}`);
// or
// arrayRollNumbers1.reverse();
// console.log(`Greatest no from the array : ${arrayRollNumbers1[0]}`);
// or
// arrayRollNumbers1.sort((num1,num2)=> {
//     return num1 > num2 ? -1 : 1;
// });
// console.log(`Greatest no from the array : ${arrayRollNumbers1[0]}`);

console.log(`----------------------------------------------------------------step 5---------------------------------------------------------`);

const arrayRollNumbers2 = [113,45,56,11,32,45,109,799,56,45];
arrayRollNumbers2.sort((num1,num2)=>{
    return num1 > num2 ? 1 : -1;
});
console.log(`Smallest no from the array : ${arrayRollNumbers2[0]}`);

console.log(`----------------------------------------------------------------step 6---------------------------------------------------------`);

const removeDup = [... new Set(arrayRollNumbers2)];
console.log(`After removing Duplicates new array : [${removeDup}]`);

console.log(`------------------------------------------------------------------End----------------------------------------------------------`);
