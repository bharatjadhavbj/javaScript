console.log(`----------------------------------------------------------------step 1---------------------------------------------------------`);

console.log(`Shallow clone :=>`);
const arrayNums=[20,3,4,56,90,400,49];
console.log(`Original Array => [${arrayNums}]`);
const cloneArray = arrayNums;
cloneArray.push(55,66);
console.log(`After pushing '55','66' cloned array => [${cloneArray}]`);
console.log(`After performing push on cloned array Original array will be updated => [${arrayNums}]`);

console.log(`----------------------------------------------------------------step 2---------------------------------------------------------`);

const arrayNums1=[20,3,4,56,90,400,49];
console.log(`original Array => [${arrayNums1}]`);
const cloneArray2 = [...arrayNums1];
arrayNums1.splice(arrayNums1.indexOf(90),0,10,25);
console.log(`Adding '10','25' before '90' array => [${arrayNums1}]`);
console.log(`after adding elements to the original array, the cloned array is => [${cloneArray2}]`);

console.log(`----------------------------------------------------------------step 3---------------------------------------------------------`);

const arrayNums2 = [20,3,4,56,90,400,49];
const arrayEven = [2,30,14,8];
const mergedArray = [...arrayNums2,...arrayEven];
console.log(`Original array => [${arrayNums2}]`);
console.log(`Given other array => [${arrayEven}]`);
console.log(`merged array using spread => [${mergedArray}]`);

// const concatArray = [].concat(arrayNums2,arrayEven);
// console.log(`merged array using concat => [${concatArray}]`);

console.log(`---------------------------------------------------------------step 4,5--------------------------------------------------------`);

const employee_info ={
    emp_id :27,
    emp_name : "John Doe",
    salary : {
        july_month : "40,000INR",
        aug_month : "50,000INR",
        jun_month : "65,000INR"
    },
    address :{
        locality : {
            colony : "OM Vrindavan Society",
            street : "Kanch Pokli, 431202",
        },
        city : "Mumbai",
        state : "Maharashtra",
        country : "India"
    },
    mobiles : ["+91 8600 3456 88","1800- 4567 32","+91- 9096 5678 77"]
}

console.log(`a.Employee address is => \n${JSON.stringify(employee_info.address)}`);

// console.log(`${employee_info.address.locality.colony} ${employee_info.address.locality.street}\n${employee_info.address.city}\n${employee_info.address.state}\n${employee_info.address.country}`);

console.log(`b.Employee '${employee_info.emp_name}' mobile no is => ${employee_info.mobiles} `);

console.log(`----------------------------------------------------------------step 6---------------------------------------------------------`);

const deepCopyObj = JSON.parse(JSON.stringify(employee_info));
console.log(`a.=>\nOriginal salary :=> ${deepCopyObj.salary.july_month}`);
deepCopyObj.salary.july_month = "80,000INR";
console.log(`Updating salary on cloned obj :=> ${deepCopyObj.salary.july_month}`);
console.log(`b.=>\nOriginal country is :=> ${employee_info.address.country}`);
employee_info.address.country = "United kingdom";
console.log(`Updated country is :=> ${employee_info.address.country}`);

console.log(`c.=>\nOriginal obj => ${JSON.stringify(employee_info)}`);
console.log(`\nCloned obj => ${JSON.stringify(deepCopyObj)}`);

console.log(`------------------------------------------------------------------End----------------------------------------------------------`);
