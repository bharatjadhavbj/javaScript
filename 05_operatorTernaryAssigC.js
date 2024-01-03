

console.log("--------------------------------------------------Step 1-------------------------------------------------------\n");

function maleMarriageEligibility (gender,age,boyName){
    var result= gender=="Male"&&age>=21 ?`Hey ${boyName} you are eligible for Marriage\n`:`Unfortunately ${boyName} you are not eligible, please try next time \n`;
    console.log(`${result}`); 
 }
 maleMarriageEligibility("Male",25,"Billgates");
 maleMarriageEligibility("Male",17,"Stev Jobs");

console.log("--------------------------------------------------Step 2-------------------------------------------------------\n");

function femaleMarriageEligibility (gender,age,girlName){
    var result= gender=="Female"&&age>=18 ?`Hey ${girlName} you are eligible for Marriage`:`Unfortunately ${girlName} you are not eligible, please try next time \n`;
    console.log(`${result}`); 
 }
 femaleMarriageEligibility("Female",16,"Jenifer");
 femaleMarriageEligibility("Female",27,"Malinda Gates");

console.log("--------------------------------------------------End----------------------------------------------------------\n");
