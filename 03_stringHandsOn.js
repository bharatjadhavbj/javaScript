console.log("--------------------------------------------------Assign 3-------------------------------------------------------\n");

function stringHandsOn(){
    var str="   Hey you are doing good, keep it up    ";
    
    console.log(`1-> Given string is = "${str}"\n`);
    
    console.log(`2-> Length of given string is =${str.length}\n`);
    
    var trimedStr=str.trim();
    console.log(`3-> After Trim String is ="${trimedStr}" And it's Length is ='${trimedStr.length}'\n`);

    var spaces=str.length-trimedStr.length;
    console.log(`4-> No of spaces removed from given string = '${spaces}'\n`);

    console.log(`5-> First character of the Given String is = '${trimedStr.charAt(0)}', and last character is = '${trimedStr.charAt(trimedStr.length-1)}'\n`);

    var totalWord=trimedStr.split(" ");
    console.log(`6-> Total words in string = '${totalWord.length}'\n`);

    var indexOfG=trimedStr.indexOf("good");
    console.log(`7-> Index of word "good" is = '${indexOfG}'\n`);

    console.log(`8-> Sub string starting from index 22\n  1.using substring- "${trimedStr.substring(22)}"\n  2.using slice- "${trimedStr.slice(22)}"\n`);
    
    console.log(`9-> Is the string is ends with word "up" = ${trimedStr.endsWith("up")}\n`);

    console.log(`10-> Is the string is Starts with word "Hey" = ${trimedStr.startsWith("Hey")}`);

    console.log("-----------------------------------------------------------------------------------------------------------------\n");

} 
stringHandsOn();

