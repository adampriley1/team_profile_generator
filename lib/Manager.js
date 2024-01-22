// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

//import employee class
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // Call the constructor of the parent class (Employee)
    super(name, id, email);
    //do i need to add anything for the above super brackets??

    // Add properties specific to Manager
    this.officeNumber = officeNumber;
  }
  
  //`getRole()overridden to return `'Manager'`
  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}
module.exports = Manager;
