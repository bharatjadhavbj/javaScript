console.log(`-----------------------------------------------------------------Step 1,2---------------------------------------------------------------------- \n`);

function Bank(bankName,location,ifscCode,branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
    this.bankDetails = function () {
     console.log(`Bank details is =>\n Bank Name => ${this.bankName}, Location => ${this.location}, IFSC Code => ${this.ifscCode}, Branch Code => ${this.branchCode}`);
    }
}

const yesBank =new Bank('YES Bank','Pune','YESB0000008','411532002');
const sbiBank =new Bank('State Bank Of India ','Mumbai','SBIN0000300','000300');
const mahBank =new Bank('Bank Of Maharashtra','Solapur','MAHB0000549','000549');
const axisBank =new Bank('Axis Bank','Sangola','UTIB0003816','413211351');
yesBank.bankDetails();
sbiBank.bankDetails();
mahBank.bankDetails();
axisBank.bankDetails();

console.log(`\n-----------------------------------------------------------------Step 3,4,5-------------------------------------------------------------------- \n`);

Bank.prototype.openTime = "9 AM IST";

Bank.prototype.closeTime = "6 PM IST";

console.log(`Opening time of SBI Bank => ${sbiBank.openTime} and Closing time is => ${sbiBank.closeTime}\n`);

console.log(`-------------------------------------------------------------------Step 6---------------------------------------------------------------------- \n`);

console.log(`Bank Name => ${axisBank.bankName} and its Closing time => ${axisBank.closeTime}\n`);

console.log(`-------------------------------------------------------------------Step 7---------------------------------------------------------------------- \n`);

console.log(`Bank Name => ${yesBank.bankName}, Branch Code => ${yesBank.branchCode} and its opening time => ${yesBank.openTime}\n`);

console.log(`---------------------------------------------------------------------End----------------------------------------------------------------------- \n`);
