


var maleMarriageEligibility = function (gender,age,boyName){
   var result= gender=="Male"&&age>=21 ?`Hey ${boyName} you are eligible for Marriage`:`Unfortunately you are not eligible, please try next time`;
   console.log(`${result}`); 
}
maleMarriageEligibility("Male",25,"Billgates");