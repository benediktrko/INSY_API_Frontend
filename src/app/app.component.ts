import { Component } from '@angular/core';
import {Employee} from "./employee-service/employee";
import {EmployeeService} from "./employee-service/employee.service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'INSY_API_Frontend';
  employees: Employee[] = [];
  numberOfEmployees = 0;

  urlSubmitted: boolean = false;
  numberOfRowsSubmitted: boolean = false;


  constructor(private service: EmployeeService) {
  }

  changeUrl(value: any) {
    this.service.Url = value;
    console.log(value);
    this.urlSubmitted = true;
  }

 async getEmployees(value: number) {
    this.employees = [];
    this.employees = await this.service.GetEmployees(value);
    this.numberOfRowsSubmitted = true;
  }

  addEmployee($event: Employee) {
      this.addEmployeeAsync($event);
  }
  async addEmployeeAsync(input: Employee){
    let text = await this.service.AddEmployeeJson(input);
    if (text == 'OK'){
      await this.getEmployees(this.numberOfEmployees);
      alert('Employee was successfully added.');
    }
    else {
      alert('Employee could not be added.');
    }

  }

  deleteEmployee(id: any) {
    this.deleteEmployeeAsync(id);

  }
  async deleteEmployeeAsync(ids: Number[]){
    let text = await this.service.DeleteEmployee(ids);
    if (text == 'OK'){
      await this.getEmployees(this.numberOfEmployees);
      alert('Employee deleted.')
    }
    else {
      await this.getEmployees(this.numberOfEmployees);
      alert('At least one Employee could not be deleted.')
    }

  }

}
