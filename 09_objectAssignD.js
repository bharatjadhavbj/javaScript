
console.log(`----------------------------------------------------Step 1,2------------------------------------------------------- \n`);

let professor = {
    professorName: "Prof. Satish Patil",
    age: 41,
    city: "Pune",
    street: "Wakad",
    pin: 411057,       
    department: "Computer Science",
    degrees: {
            engineering: 'CSC',
            PHD: 'Adv Computing',
            masters: 'Mtech'
        },
    isMarried: true
}

console.log(professor);

console.log(`\n----------------------------------------------------Step 3---------------------------------------------------------- \n`);

professor.certificates=["Hacker Rank Participation","Certificate in IFE course ","Certificate in Adv Programming"];
console.log(`Adding certificates array in obj : [${professor.certificates}]`);

console.log(`\n----------------------------------------------------Step 4---------------------------------------------------------- \n`);

professor.totalExperience='14 years';
console.log("After adding new property totalExperience :",professor.totalExperience);

console.log(`\n----------------------------------------------------Step 5---------------------------------------------------------- \n`);

console.log("Original value of street :",professor.street);
professor.street='Pimpari Chinchwad';
console.log("After Update street value \nstreet :",professor.street);


console.log(`\n----------------------------------------------------Step 6---------------------------------------------------------- \n`);

professor.certificates.splice(2,0,'Oracle Certified');
console.log(`After adding new certificate 'Oracle Certified' at index 2 in Certificate updated array is :\n[${professor.certificates}]`);

console.log(`\n----------------------------------------------------Step 7---------------------------------------------------------- \n`);

let lengthOf=professor.certificates;
console.log(`Last element of certificate :- ${professor.certificates[lengthOf.length-1]}`);

console.log(`\n----------------------------------------------------Step 8---------------------------------------------------------- \n`);

for (const key in professor) {
        const element = professor[key];
        console.log(`Key ==> ${key}, Value ==> ${element}`);
    
}

console.log(`\n----------------------------------------------------Step 9---------------------------------------------------------- \n`);

console.log(`Certificate array Traversing :-\n`);
for (const value of professor.certificates) {
    console.log(value);
}

console.log(`\n----------------------------------------------------End------------------------------------------------------------- \n`);
