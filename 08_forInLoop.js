let array = [11, 22, 33, 44, 55, 66, 77];
sum=0;
console.log(`Traversing an array using for in loop..`);
for (const index in array) {
   console.log(array[index]);
   sum=sum+array[index];

}
console.log(`sum of array elements : ${sum}`);

console.log(`Traversing an array using for of loop..`);
for (const element of array) {
   console.log(element); 
}

let arrayNum = [4, 5, 6, 7, 3]
console.log(`Traversing an array using for of loop..`);
sum=0;
for (const element of arrayNum) {

    console.log(element);
    sum=sum+element; 
}
console.log(`${sum}`);


console.log(`==== WAP to count the vowels from the given string=======`);
const str = "Developer UI and Backend";
const vowels = "aeiou";
let count = 0;
for (const char of str) {
    console.log(char);
    if (vowels.includes(char.toLowerCase())) {
        count++;
    }
}
console.log(`Vowels count is: ${count}`);

let arrayOfFriends = ["Jenny", "Elon", "Bill"];
const result = arrayOfFriends.join(",");
console.log(typeof result);
console.log(result);

arrayOfFriends.reverse();
console.log(arrayOfFriends);

const word = "Developer UI and Backend";
const arrayOfWords = word.split(" ");
console.log(arrayOfWords.length);

//String reverse using methods

const reverseStr = word.split("").reverse().join("");
console.log(reverseStr);


let arrayn = ["Jenny", "Menny", "Bill"];

// Spread Operator ...
console.log(arrayn); // ['Jenny', 'Menny', 'Bill']
console.log(...arrayn); // Jenny Menny Bill

const newArray =[...arrayn];
console.log(newArray);