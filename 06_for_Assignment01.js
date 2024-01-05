
console.log(`=================================================For loop=================================================`);

console.log(`Step 1=====>Prog for numbers from 5 to 15 incrementing by 1======`);

for (let index = 5; index <=15; index++) {
  console.log(index);  
}

console.log(`Step 2=====>Prog for numbers from 50 to 40 decrementing by 1======`);

for (let index = 50; index >=40; index--) {
  console.log(index);  
}

console.log(`Step 3=====>First 15 odd numbers======`);

count=1;

for (let index = 1; count<=15; index = index+2) {
  console.log(index);  
  count++;
}

console.log(`Step 4=====>First 10 Even numbers======`);

count=1;
for (let index = 0; count<=10; index = index+2) {
  console.log(index);  
  count++;
}

console.log(`Step 5=====>Table of 5======`);

for (let index = 5; index<=50; index = index+5) {
  console.log(index);  
}

console.log(`Step 6=====>Table of 10======`);

for (let index = 10; index<=100; index = index+10) {
  console.log(index);  
}

console.log(`Step 7=====>Table of 10 in reverse======`);

for (let index = 100; index>=10; index = index-10) {
  console.log(index);  
}
