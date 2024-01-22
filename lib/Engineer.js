// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHubName) {
      // Call the constructor of the parent class (Employee) 
      super(name, id,email);
      //do i need to add anything for the above super brackets??
    
      // Add properties specific to Engineer
      this.gitHubName= gitHubName;
    }
    //getRole() overridden to return `'Engineer'`
    getRole() {
        return 'Engineer';
}

getGithub() {
    return this.gitHubName;
}
}
module.exports = Engineer;