import { Injectable } from '@angular/core';
import {last, map, Observable, throwError, toArray} from "rxjs";
import { catchError, retry } from 'rxjs/operators';
import {HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Employee} from "./employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private _employees: Employee[] = [];
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };


  private HandleError(text: string, employee: Employee) {
    if (text === "addEmployee") {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', text);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${text}, body was: `, text);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  AddEmployee(employeeId: number, lastName: string, firstName: string, title: string, titleOfCourtesy: string, birthday: Date, hireDate: Date, address: string, city: string, region: string, postalCode: string, country: string, homePhone: string, extension: string, photo: string, notes: string, reportsTo: number, photoPath: string):Observable<Employee>{

    let employee = new Employee(employeeId, lastName, firstName, title, titleOfCourtesy, birthday, hireDate, address, city, region, postalCode, country, homePhone, extension, photo, notes, reportsTo, photoPath);
    this._employees.push(employee);
    let jsonString = JSON.stringify(employee);
    return this.http.post<Employee>(this._employeesUrl, employee, this.httpOptions);

  }
  GetEmployees(top: number){
    let employees : Observable<Employee[]> = this.http.get<any[]>(`${this._employeesUrl}/?top=${top}`);
    employees.pipe(
      map(jsonArray => jsonArray.map(json => {
        this._employees.push(Employee.fromJson(json));
      }))
    );
    return this._employees;
  }

  DeleteEmployee(){

  }


  constructor(private http: HttpClient, private _employeesUrl: string) {

  }
}

