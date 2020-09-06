import { Component, OnInit, Inject } from '@angular/core';
import { Employee } from '../Models/Employee';
import { Router } from '@angular/router';
import { templateJitUrl } from '@angular/compiler';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { EmployeeDataService } from 'src/Services/employee-data.service';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  listOfEmployees: Employee[];
  employees: Employee[];

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private employeeService: EmployeeDataService
  ) {}

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
    this.dialog.open(AddUserComponent);
    console.log('Employee added.................');
  }
  EditEmployee(e: Employee) {
    console.log('Inside edit!!!');
    this.dialog.open(AddUserComponent);
  }
}
