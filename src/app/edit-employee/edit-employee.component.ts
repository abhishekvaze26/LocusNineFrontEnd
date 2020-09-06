import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EmployeeDataService } from 'src/Services/employee-data.service';
import { Employee } from '../Models/Employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  employeeData: Employee;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: Employee,
    private employeeService: EmployeeDataService,
    private router: Router,
    private dialogRef: MatDialogRef<EditEmployeeComponent>
  ) {
    this.employeeData = data;
  }

  ngOnInit(): void {}

  editClicked(f) {
    console.log(this.employeeData);

    //Check if the new status is same as that of an existing status.
    //If not, then only edit the employee
    if ((this.employeeData.EmployeeStatus != f.value.employeeStatus) == true) {
      this.employeeData.EmployeeStatus = f.value.employeeStatus;

      console.log(this.employeeData);

      this.employeeService.editEmployee(this.employeeData).subscribe((data) => {
        console.log(data);
      });
    }
    this.dialogRef.close();
  }
}
