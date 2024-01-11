
console.log(`\n----------------------------------------------------Step 1---------------------------------------------------------- \n`);

// creating bankSbi Object.

const bankSbi={
    bankName: 'State Bank Of India',
    branchCode: 'SBIN0000271',
    branchManagerName: 'Mr. Manish Shah',
    bankStaff: 15,
    branchLocation: 'Sangola'
}
console.table(bankSbi);

console.log(`\n----------------------------------------------------Step 2---------------------------------------------------------- \n`);

//creating bankLocation Object

const bankLocation={
    street:'Solapur Road',
    city:'Sangola',
    pin:413307
}
console.table(bankLocation);
console.log(`\n----------------------------------------------------Step 3---------------------------------------------------------- \n`);

console.log(`after cloning of bankSbi And bankLocation result is :`);
const bankDetail=Object.assign({},bankSbi,bankLocation)
console.table(bankDetail);

console.log(`\n----------------------------------------------------Step 4---------------------------------------------------------- \n`);

const rateOfIntrest ={
    homeLoanInterest: 8.4,
    personalLoanInterest: 11.15,
    dueInterest: 7.60    
}
console.log(JSON.stringify(rateOfIntrest));


console.log(`\n----------------------------------------------------Step 5---------------------------------------------------------- \n`);

console.log(`Total bank detail is :`);
const sbiDetail=Object.assign({},bankDetail,rateOfIntrest);
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
