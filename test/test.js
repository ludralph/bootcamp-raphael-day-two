'use strict';

let expect = require('chai').expect;

const Intern = require('../src/app.js').Intern;
const Associate = require('../src/app.js').Associate;
const Manager = require('../src/app.js').Manager;
const Executive = require('../src/app.js').Executive;
const Director = require('../src/app.js').Director;

describe("Employee Class: Create Intern class and calculate its's salary",()=> {
	it("The Intern should be a property of the Employee with salary 36500", ()=> {
      let john  = new Intern('John', 'Awaji', 'Intern', 1);
      expect(john.salary()).to.equal(36500);
    });

    it("The Associate should be a property of the Employee with salary 55000", ()=> {
      let will  = new Associate('Will', 'Collins', 'Associate', 1);
      expect(will.salary()).to.equal(55000);
    });

    it("The Manager should be a property of the Employee with salary 73500", ()=> {
      let smith  = new Manager('Smith', 'Brad', 'Manager', 1);
      expect(smith.salary()).to.equal(73500);
    });
    
    it("The Director should be a property of the Employee with salary 92000", ()=> {
      let tolu  = new Executive('Tolu', 'Alade', 'Executive', 1);
      expect(tolu.salary()).to.equal(92000);
    });

    it("The Executive should be a property of the Employee with salary 110500", ()=> {
      let smart = new Director('John', 'Will', 'Director', 1);
      expect(smart.salary()).to.equal(110500);
    });
});

// describe("Employee Class")
// it("The car name and model should be a property of the car", ()=> {
//       var toyin  = new Intern('Toyin', 'Adeola','Intern', 0);
//       var tope = new Associate('Tope', 'Ola','Associate', 1);
//       var tayo = new Manager('Tayo', 'MOla','Manager', 2);
//       var tolu = new Executive('Tolu', 'Dee', 'Executive', 3);
//       var temi = new Director('Temi', 'Qeu', 'Director', 4);

//       expect(toyin.Salary()).toBe(36000);
//       expect(tope.Salary()).toBe(55000);
//       expect(tayo.Salary()).toBe(75000);
//       expect(tolu.Salary()).toBe(96000);
//       expect(temi.Salary()).toBe(118000);

//     });