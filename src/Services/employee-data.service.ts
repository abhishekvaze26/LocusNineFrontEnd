import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from 'src/app/Models/Employee';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDataService {
  private refreshNeeded$ = new Subject<void>();
  private getUrl = 'https://localhost:44367/api/Employees';

  constructor(private httpClient: HttpClient) {}

  get _refreshNeeded$() {
    return this.refreshNeeded$;
  }

  public getEmployees = (): Observable<Employee[]> => {
    return this.httpClient.get<Employee[]>(this.getUrl);
  };

  public postEmployee(employee: Employee) {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.httpClient
      .post(this.getUrl, employee, { headers: headers })
      .pipe(
        tap(() => {
          this.refreshNeeded$.next();
        })
      );
  }

  public deleteEmployee(employee: Employee) {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.httpClient.delete(this.getUrl + '/' + employee.EmployeeId).pipe(
      tap(() => {
        this.refreshNeeded$.next();
      })
    );
  }

  public editEmployee(employee: Employee) {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.httpClient
      .put(this.getUrl + '/' + employee.EmployeeId, employee)
      .pipe(
        tap(() => {
          this.refreshNeeded$.next();
        })
      );
  }
}
