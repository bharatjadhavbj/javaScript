

console.log(`--------------------------------------------- Marriage Eligibility Check ------------------------------------------------------------ \n`);
var marriageEligibility=function(gender,age){
    if ( age<=0 || age==undefined ||isNaN(age) ||age>=45) {
        console.log(`Invalid Input... \n`);
    } else if (gender=="Male" && age>=21) {
        console.log(`${gender} ${age} =>He is eligible for marriage \n`);
    } else if (gender=="Female" && age>=18) {
        console.log(`${gender} ${age} =>She is eligible for marriage \n`);
    } else {
        console.log(`${gender} ${age} =>Not eligible for marriage \n`);
    }
}
marriageEligibility("Male",17);
marriageEligibility("Male",25);
marriageEligibility("Female",28);
marriageEligibility("female",16);
marriageEligibility("Other",35);
marriageEligibility("Other",41);