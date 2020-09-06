import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/Employee';
import { EmployeeDataService } from 'src/Services/employee-data.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddNewUserComponent } from '../add-new-user/add-new-user.component';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  listOfEmployees: Employee[];
  employees: Employee[];
  closeDialogs: any;
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private employeeService: EmployeeDataService
  ) {
    // const navigation = this.router.getCurrentNavigation();
    // const state = navigation.extras.state as { data: string };
    // this.closeDialogs = state.data;
    // if (this.closeDialogs == 'close') {
    //   this.dialog.closeAll();
    // }
  }

  ngOnInit(): void {
    this.employeeService._refreshNeeded$.subscribe(() => {
      this.GetAllEmployees();
    });
    this.GetAllEmployees();
  }

  public GetAllEmployees() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.listOfEmployees = data as Employee[];
    });
  }

  AddEmployee(e: Employee) {
    console.log('Inside edit!!!');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.closeOnNavigation = true;
    this.dialog.open(AddNewUserComponent, dialogConfig);
    console.log('Employee added.................');
  }

  EditEmployee(e: Employee) {
    console.log('Inside edit!!!');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = e;
    this.dialog.open(EditEmployeeComponent, dialogConfig);
  }

  DeleteEmployee(e: Employee) {
    this.employeeService.deleteEmployee(e).subscribe((data) => {
      console.log(data);
    });
  }

  sortByName() {
    console.log('inside sort...');
    this.listOfEmployees = this.listOfEmployees.sort(this.compareName);
  }

  compareName(e1: Employee, e2: Employee) {
    if (e1.EmployeeName < e2.EmployeeName) {
      return -1;
    }
    if (e1.EmployeeName > e2.EmployeeName) {
      return 1;
    }
    return 0;
  }
}
