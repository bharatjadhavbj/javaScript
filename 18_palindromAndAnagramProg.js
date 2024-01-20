console.log(`====== WAP for find word is Palindrome or not ======\n`);
// for eg :- MADAM
const isPalindrome = function(word){
const reversWord=word.split("").reverse().join("");
return word==reversWord?true:false;
}
const result = isPalindrome("MADAM");
console.log(`Given Word MADAM Is Palindrome => ${result}\n`);

console.log(`====== WAP for find word is Palindrome or not ======\n`);
// 'heart' and 'earth' are anagrams.
// 'heart' => Sort in ascending order ==>  aehrt
// 'earth' => Sort in ascending order ==> aehrt

const isAnagrams = (str1, str2)=>{ 
    const resultStr1 = str1.split("").sort().join("");
    const resultStr2 = str2.split("").sort().join("");
    return resultStr1==resultStr2 ? true : false;
}
const resultAnagram =isAnagrams("heart","earth");
console.log(`Given words 'heart' and 'earth' are Anagram => ${resultAnagram} `);


