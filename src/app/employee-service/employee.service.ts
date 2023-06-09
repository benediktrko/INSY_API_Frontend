import { Injectable } from '@angular/core';
import {last, map, Observable, throwError, toArray} from "rxjs";
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

    let text: string;
    let jsonString = value.toJson();
    await this.http.post(this._employeesUrl, jsonString, {observe: 'response'})
      .subscribe(response =>{
        text = response.statusText;
      })
    if (text == 'OK'){
      this._employees.push(value);
    }
    return text;
  }
   async GetEmployees(top: number){
    await this.http.get(`${this._employeesUrl}/?top=${top}`)
     .subscribe(response =>{
       let array: any[]=[];
       array.push(response);
       for (let employee of array[0]) {
         this._employees.push(employee);
       }
     });
    return this._employees;
  }

  async DeleteEmployee(id: number){
    let text: string;
    await this.http.delete(`${this._employeesUrl}/?id=${id}`, {observe: 'response'})
      .subscribe(response =>{
        text = response.statusText;

      })
    return text;
  }



  constructor(private http: HttpClient) {

  }

}

