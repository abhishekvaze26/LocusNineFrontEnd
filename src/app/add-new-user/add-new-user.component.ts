import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from 'src/Services/employee-data.service';
import { Employee } from '../Models/Employee';
import { Router, NavigationExtras } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css'],
})
export class AddNewUserComponent implements OnInit {
  constructor(
    private employeeService: EmployeeDataService,
    private router: Router,
    private dialogRef: MatDialogRef<AddNewUserComponent>
  ) {}

  ngOnInit(): void {}

  submitClicked(f) {
    console.log(f);
    this.employeeService
      .postEmployee(
        new Employee(
          f.value.employeeName,
          f.value.employeeEmail,
          f.value.employeeMobile,
          f.value.employeeRole,
          'Inactive'
        )
      )
      .subscribe((data) => {
        console.log(data);
      });
    this.dialogRef.close();

    //this.router.navigate(['/'], navigationExtras);
  }

  CloseDialog() {
    this.dialogRef.close();
  }
}
