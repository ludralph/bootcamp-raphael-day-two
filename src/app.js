'use strict';

class Employee {
    constructor(firstName, lastName, employeeType, yearsEmployed) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeType = employeeType;
        this.yearsEmployed = yearsEmployed;
        this.minimumWage = 18000;
        this.totalSalary = 0;
    }
    salary() {
        this.totalSalary = this.minimumWage * this.level
        if (this.bonus !== 0) {
            this.totalSalary = this.totalSalary + this.bonus;
            return this.totalSalary;
        }
        return this.totalSalary;
    }
}

class Intern extends Employee {
    constructor(firstName, lastName, employeeType, yearsEmployed) {
        super(firstName, lastName, employeeType, yearsEmployed);
        this.level = 2;
        if (yearsEmployed > 0) {
            this.bonus = 500 * yearsEmployed;
        } else {
            this.bonus = 0;
        }
    }

}

class Associate extends Employee {
    constructor(firstName, lastName, employeeType, yearsEmployed) {
        super(firstName, lastName, employeeType, yearsEmployed);
        this.level = 3;
        if (yearsEmployed > 0) {
            this.bonus = 1000 * yearsEmployed;
        } else {
            this.bonus = 0;
        }
    }

}

class Manager extends Employee {

    constructor(firstName, lastName, employeeType, yearsEmployed) {
        super(firstName, lastName, employeeType, yearsEmployed);
        this.level = 4;
        if (yearsEmployed > 0) {
            this.bonus = 1500 * yearsEmployed;
        } else {
            this.bonus = 0;
        }
    }

}

class Executive extends Employee {
    constructor(firstName, lastName, employeeType, yearsEmployed) {
        super(firstName, lastName, employeeType, yearsEmployed);
        this.level = 5;
        if (yearsEmployed > 0) {
            this.bonus = 2000 * yearsEmployed;
        } else {
            this.bonus = 0;
        }
    }
}

class Director extends Employee {
    constructor(firstName, lastName, employeeType, yearsEmployed) {
        super(firstName, lastName, employeeType, yearsEmployed);
        this.level = 6;
        if (yearsEmployed > 0) {
            this.bonus = 2500 * yearsEmployed;
        } else {
            this.bonus = 0;
        }
    }
}

let d = new Director("John","Will","Director",1);
let e = new Executive("Pius","Johne","Executive",1);
let m = new Manager("Oliver","Stone","Manager",1);
let a = new Associate("Frank","Mowet","Associate",1);
let i = new Intern("Charlie","Adam","Intern",1);


console.log(`Director salary is ${d.salary()} and his name is ${d.firstName} ${d.lastName}`);
console.log(`Executive salary is ${e.salary()}`);
console.log(`Manager salary is ${m.salary()}`);
console.log(`Àssociate salary is ${a.salary()}`);
console.log(`Intern salary is ${i.salary()}`);

module.exports = {
    Manager: Manager,
    Executive: Executive,
    Director: Director,
    Intern: Intern,
    Associate: Associate
}