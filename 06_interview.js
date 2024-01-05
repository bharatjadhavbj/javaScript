
console.log("=================================================TCS Interview Eligibility Check============================================\n");

var checkEligibility=function(gradScore,hscScore,sscScore,candidateName){
    if(gradScore>=70||hscScore>=80||sscScore>90){
        console.log(`Congrates ${candidateName} ! You are eligible for TCS interview. \n`);
    }else{
        console.log(`Sorry ${candidateName} ! unfortunately you are not eligible for TCS interview.\n`);
    }
}
checkEligibility(80,86,90,"Bharat");
checkEligibility(70,65,55,"Harshad");
checkEligibility(60,79,88,"Anish");

