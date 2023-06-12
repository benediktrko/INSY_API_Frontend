import { Injectable } from '@angular/core';
import {firstValueFrom, last, lastValueFrom, map, Observable, throwError, toArray} from "rxjs";
import { catchError, retry } from 'rxjs/operators';
import {HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Employee} from "./employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private _employees: Employee[] = [];
  private _employeesUrl: string;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  set Url(value: string){
    this._employeesUrl = value;
  }

  /*AddEmployee(employeeId: number, lastName: string, firstName: string, title: string, titleOfCourtesy: string, birthday: Date, hireDate: Date, address: string, city: string, region: string, postalCode: string, country: string, homePhone: string, extension: string, photo: string, notes: string, reportsTo: number, photoPath: string):Observable<Employee>{

    let employee = new Employee(employeeId, lastName, firstName, title, titleOfCourtesy, birthday, hireDate, address, city, region, postalCode, country, homePhone, extension, photo, notes, reportsTo, photoPath);
    this._employees.push(employee);
    let jsonString = JSON.stringify(employee);
    return this.http.post<Employee>(this._employeesUrl, employee, this.httpOptions);

  }*/
  async AddEmployeeJson(value: Employee){
    let jsonString = value.toJson();
    let response;
    response = await firstValueFrom(this.http.post(this._employeesUrl, jsonString, {observe: 'response'}));
    return response.statusText;
  }
   async GetEmployees(top: number){
     this._employees = [];
     const response = await lastValueFrom(this.http.get(`${this._employeesUrl}/?top=${top}`));

     let array: any[] = [];
     array.push(response);
     for (let employee of array[0]) {
       this._employees.push(Employee.fromJson(employee));
     }
     return this._employees;
  }

  async DeleteEmployee(ids: Number[]){
    let response;
    let text = 'OK';
    for (let id of ids) {
      response = await firstValueFrom(this.http.delete(`${this._employeesUrl}/?id=${id}`, {observe: 'response'}));
      if (response.statusText != 'OK'){
        text = response.statusText;
      }
    }
    return text;
  }



  constructor(private http: HttpClient) {

  }

}

