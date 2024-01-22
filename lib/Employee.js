// TODO: Write code to define and export the Employee class

//create an employee class with name / id / email
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id
      this.email = email;
    }
    //are these correct??
      getName() {
        return this.name;
      }

      getId() {
        return this.id;
      }

      getEmail() {
        return this.email;
      }
      ///To-do below * `getRole()returns `'Employee'`     
      getRole() {
        return 'Employee';
        //code for get role + returns `'Employee'` ?? 
      }
}
    module.exports = Employee;