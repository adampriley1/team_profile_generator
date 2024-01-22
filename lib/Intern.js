// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
//import employee class 
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
      // Call the constructor of the parent class (Employee) 
      super(name, id,email);
      //do i need to add anything for the above super brackets??
    
      // Add properties specific to Engineer
      this.school=school;
    }
    //getRole() overridden to return `'Intern'`
    getRole() {
        return 'Intern';
}

}
module.exports = Intern;