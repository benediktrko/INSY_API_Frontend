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
   let temp: Employee[] = [];
    await this.service.GetEmployees(value)
      .then(value =>{
        temp = value;

      });


   this.employees = temp;
    this.numberOfRowsSubmitted = true;
  }

  addEmployee($event: Employee) {


      this.service.AddEmployeeJson($event)
        .then(value =>{
          if(value == 'OK'){
            this.getEmployees(this.numberOfEmployees);
            alert('Employee added.')
          }
          else{
            alert('Employee could not be added');
          }
        })


  }

  deleteEmployee(id: number) {
    this.service.DeleteEmployee(id)
      .then(value => {
        if (value == 'OK'){
          this.getEmployees(this.numberOfEmployees);
          alert(`Employee with ID ${id} deleted.`);
        }
        else {
          alert(`Employee could not be deleted`);
        }
      })



  }
}
