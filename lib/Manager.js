// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

class Manager extends Employee {
    constructor(officeNumber) {
      // Call the constructor of the parent class (Employee) 
      super();
      //do i need to add anything for the above super brackets??
    
      // Add properties specific to Manager
      this.officeNumber = officeNumber;
    }
    //`getRole()`&mdash;overridden to return `'Manager'`
    getRole() {
        return this.Manager;
}
}