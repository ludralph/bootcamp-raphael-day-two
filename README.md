# Instruction
 Create an OOP implementation by modelling a real-world scenario/problem, while taking advantage of inheritance, encapsulation, polymorphism and the other OOP concepts.
 
# OOP concepts used in the implementation

1. Class keyword used for creating a class.
for example:
```javascript
 class Employee{
     // todo
 }
```
2. Creating a constructor method using the constructor keyword and initializing the instance variable used. for example
   ```javascript
	class Employee {
    	   constructor(firstName, lastName, employeeType, yearsEmployed) {
     	        this.firstName = firstName;
              this.lastName = lastName;
              this.employeeType = employeeType;
              this.yearsEmployed = yearsEmployed;
              this.minimumWage = 18000;
              this.totalSalary = 0;
        	}
  }
  ```
 3. Achieving Inheritance by means of the extends keyword after the class declaration and calling the superclass constructor by means of     the super keyword. For example
 ```javascript
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
```

## Installation 
 Ensure npm and nodejs are installed on your system.
 1. Do **git clone [repo-name]** to clone this repo
 2. Do **npm install** to install babel, mochai, chai
 3. Do **npm test** to run the test
 4. To run the app.js file do **node src/app.js**.
