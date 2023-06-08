import { Injectable } from '@angular/core';
import {last, map, Observable, throwError, toArray} from "rxjs";
import { catchError, retry } from 'rxjs/operators';
import {HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Employee} from "./employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements HttpHandler {


  private _employees: Employee[] = [];
  private _employeesUrl: string;
  private http: HttpClient = new HttpClient(this);
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };

  set Url(value: string){
    this._employeesUrl = value;
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


  constructor() {

  }

  handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    return undefined;
  }
}

