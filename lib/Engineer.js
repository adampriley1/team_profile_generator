// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(gitHubName) {
      // Call the constructor of the parent class (Employee) 
      super();
      //do i need to add anything for the above super brackets??
    
      // Add properties specific to Engineer
      this.gitHubName= gitHubName;
    }
    //getRole() overridden to return `'Engineer'`
    getRole() {
        return this.Engineer;
}

getGithub() {
    return this.gitHubName;
}
}