class Employee{
    constructor(emp_id,emp_name,emp_dept, emp_salary, emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
    getDetails(){
        console.log(`Employee ID => '${this.emp_id}', Employee Name => '${this.emp_name}', Employee Department => '${this.emp_dept}', Employee Salary => '${this.emp_salary}', Employee Company => '${this.emp_company}'`);
    }
}

const emp_anil = new Employee (22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee (33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee (55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee (66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee (77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee (88, "Vinayak", "IT", 75000, "TCS"); 
const emp_mahi = new Employee (99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`----------------------------------------------------------------step 1---------------------------------------------------------\n`);

arrayEmployees.sort((emp1,emp2) => emp2.emp_id-emp1.emp_id).forEach(empl=> console.log(`Employee ID => '${empl.emp_id}', Employee Name => '${empl.emp_name}', Employee Department => '${empl.emp_dept}'`));

console.log(`\n----------------------------------------------------------------step 2---------------------------------------------------------\n`);

arrayEmployees.sort((emp1,emp2) => emp1.emp_dept>emp2.emp_dept? 1:-1).forEach(empl => console.log(`Employee ID => '${empl.emp_id}', Employee Department => '${empl.emp_dept}', Employee Company => '${empl.emp_company}' `));

console.log(`\n----------------------------------------------------------------step 3---------------------------------------------------------\n`);

arrayEmployees.sort((e1,e2) => e2.emp_salary-e1.emp_salary).forEach(ed => console.log(`Employee Name => '${ed.emp_name}', Employee Salary => '${ed.emp_salary}', Employee Company => '${ed.emp_company}'`));

console.log(`\n------------------------------------------------------------------End----------------------------------------------------------`);
