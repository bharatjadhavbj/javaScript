
console.log(`\n----------------------------------------------------Step 1---------------------------------------------------------- \n`);

// creating bankSbi Object.

const bankSbi={
    bankName: 'State Bank Of India',
    branchCode: 'SBIN0000271',
    branchManagerName: 'Mr. Manish Shah',
    bankStaff: 15,
    branchLocation: 'Sangola'
}
console.log(bankSbi);

console.log(`\n----------------------------------------------------Step 2---------------------------------------------------------- \n`);

//creating bankLocation Object

const bankLocation={
    street:'Solapur Road',
    city:'Sangola',
    pin:413307
}
console.log(bankLocation);
console.log(`\n----------------------------------------------------Step 3---------------------------------------------------------- \n`);

console.log(`after cloning of bankSbi And bankLocation result is :`);
const bankDetail=Object.assign({},bankSbi)
const bankDetail1=Object.assign({},bankLocation)
console.log(bankDetail,"\n",bankDetail1);

console.log(`\n----------------------------------------------------Step 4---------------------------------------------------------- \n`);

const rateOfIntrest ={
    homeLoanInterest: 8.4,
    personalLoanInterest: 11.15,
    dueInterest: 7.60    
}
console.log(`Given 'rateOfInterest' Object :=>`);
console.log(JSON.stringify(rateOfIntrest));


console.log(`\n----------------------------------------------------Step 5---------------------------------------------------------- \n`);

console.log(`Total bank detail is :`);
const sbiDetail=Object.assign({},bankSbi,bankLocation,rateOfIntrest);
console.log(JSON.stringify(sbiDetail));

console.log(`\n----------------------------------------------------Step 6---------------------------------------------------------- \n`);

console.log(`Traversing of Object 'sbiDetail':`);
for (const key in sbiDetail) {
    if (Object.hasOwnProperty.call(sbiDetail, key)) {
        const element = sbiDetail[key];
        console.log(`Key => ${key}, Value => ${element}`);
    }
}

console.log(`\n------------------------------------------------------End---------------------------------------------------------- \n`);
