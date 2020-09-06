import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { from } from 'rxjs';
import { AddUserComponent } from './add-user/add-user.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDataService } from '../Services/employee-data.service';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserDashboardComponent,
    AddUserComponent,
    AddNewUserComponent,
    EditEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: UserDashboardComponent },
      { path: 'addUsers', component: AddUserComponent },
      { path: 'editUser', component: EditEmployeeComponent },
    ]),
    BrowserAnimationsModule,
  ],
  exports: [FormsModule],
  providers: [EmployeeDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
