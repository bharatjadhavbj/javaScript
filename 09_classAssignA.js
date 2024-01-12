console.log(`-------------------------------------------------------------------Step 1---------------------------------------------------------------------- \n`);

class Vehicle{
    constructor(vehicleCompany,vehicleName,vehicleType,vehicleCapacity,vehiclePrice,vehicleAvarage){
        this.vehicleCompany = vehicleCompany;
        this.vehicleName = vehicleName;
        this.vehicleType = vehicleType;
        this.vehicleCapacity = vehicleCapacity;
        this.vehiclePrice = vehiclePrice;
        this.vehicleAvarage = vehicleAvarage;
    }
    vehicleDetail(){
        console.log(`Vehicle Company is => ${this.vehicleCompany}, Vehicle Name is => ${this.vehicleName}, Type of Vehicle => ${this.vehicleType}, Total capacity of vehicle => ${this.vehicleCapacity}, Price of vehicle => ${this.vehiclePrice}, Avarage of Vehicle => ${this.vehicleAvarage} \n`);
    }
}

const innovaCrista= new Vehicle('Toyota','Innova Crista','SUV',8,'24 lakhs',11);

const harrier=new Vehicle('TATA','Harrier','SUV',8,'21 lakhs',13);

const venue=new Vehicle('Hundai','Venue','Compact SUV',5,'14 lakhs',20);

const swift=new Vehicle('Maruti Suzuki','Swift','Car',5,'9 lakhs',25);

const endeavour=new Vehicle('Ford','Endeavour','Full size SUV',7,'36 lakhs',8);

console.log(`Traversing of Vehicle using Array :`);
const arrayOfVehicles=[innovaCrista,harrier,venue,swift,endeavour];
for (const element of arrayOfVehicles) {
   element.vehicleDetail(); 
}

// Seperate log on console using vehicleDetails method
// innovaCrista.vehicleDetail();
// harrier.vehicleDetail();
// venue.vehicleDetail();
// swift.vehicleDetail();
// endeavour.vehicleDetail();

console.log(`-------------------------------------------------------------------Step 2---------------------------------------------------------------------- \n`);

class College{
    constructor(collegeName,faculties,princepleName,collegeLocation){
        this.collegeName = collegeName;
        this.faculties = faculties;
        this.princepleName = princepleName;
        this.collegeLocation = collegeLocation;
        
    }
    display(){
        console.log(`College Name is ==> ${this.collegeName}, Faculties of ==> ${this.faculties}, Principle Name of college ==> ${this.princepleName}, College Location ==> ${this.collegeLocation}`);
    }

}

const sms=new College('Sangola Mahavidyalaya Sangola','Compter Science','Prof.S.V.Patil','Sangola');
const fabtech=new College('FABTECH','Engineering','Prof.D.S.Tathe','Sangola');
const sinhgad=new College('Sinhgad College','Engineering','Prof.S.N.Navale','Korti');
const sahyadri=new College('Sahyadri College','Medical','Prof.A.S.Pawar','Methawade');
sms.display();
fabtech.display();
sinhgad.display();
sahyadri.display();

console.log(`-------------------------------------------------------------------Step 3---------------------------------------------------------------------- \n`);

let traverseObject=function (obName) {
    for (const key in obName) {
        const element = obName[key];
        console.log(`Key ==> ${key}, Value ==> ${element}`);
    }
    console.log('');
}
traverseObject(sms);
traverseObject(fabtech);
traverseObject(sinhgad);
traverseObject(sahyadri);

console.log(`---------------------------------------------------------------------End----------------------------------------------------------------------- \n`);
