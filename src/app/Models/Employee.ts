export class Employee {
  EmployeeId: number;
  EmployeeName: string;
  EmployeeEmail: string;
  EmployeeMobile: string;
  EmployeeRole: string;
  EmployeeStatus: string;

  constructor(
    name: string,
    email: string,
    mobile: string,
    eType: string,
    status: string
  ) {
    this.EmployeeName = name;
    this.EmployeeEmail = email;
    this.EmployeeMobile = mobile;
    this.EmployeeRole = eType;
    this.EmployeeStatus = status;
  }

  // public static GetEmployeeList(){
  //   var listOfEmployees = new Array<Employee>();
  //   listOfEmployees=[
  //     new Employee("Steven Gerrard","stevie@gmail.com","9876543210","Admin","Active"),
  //     new Employee("Steven Gerrard","stevie@gmail.com","9876543210","Admin","Pending"),
  //     new Employee("Steven Gerrard","stevie@gmail.com","9876543210","Admin","Inactive"),
  //     new Employee("Steven Gerrard","stevie@gmail.com","9876543210","Admin","Active"),
  //     new Employee("Steven Gerrard","stevie@gmail.com","9876543210","Admin","Pending"),
  //     new Employee("Steven Gerrard","stevie@gmail.com","9876543210","Admin","Inactive"),
  //     new Employee("Steven Gerrard","stevie@gmail.com","9876543210","Admin","Active"),
  //     new Employee("Steven Gerrard","stevie@gmail.com","9876543210","Admin","Pending"),
  //     new Employee("Steven Gerrard","stevie@gmail.com","9876543210","Admin","Inactive"),
  //     new Employee("Steven Gerrard","stevie@gmail.com","9876543210","Admin","Active"),
  //     new Employee("Steven Gerrard","stevie@gmail.com","9876543210","Admin","Pending"),
  //     new Employee("Steven Gerrard","stevie@gmail.com","9876543210","Admin","Inactive"),
  //     new Employee("Steven Gerrard","stevie@gmail.com","9876543210","Admin","Active"),
  //     new Employee("Steven Gerrard","stevie@gmail.com","9876543210","Admin","Pending"),
  //     new Employee("Steven Gerrard","stevie@gmail.com","9876543210","Admin","Inactive"),
  //   ];

  //   return listOfEmployees;
  // }
}
