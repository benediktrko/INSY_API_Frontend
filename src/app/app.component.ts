import { Component } from '@angular/core';
import {Employee} from "./employee-service/employee";
import {EmployeeService} from "./employee-service/employee.service";
import {HttpClient, HttpHandler} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'INSY_API_Frontend';
  employees: Employee[] = [];
  counter = 0;
  service: EmployeeService = new EmployeeService();
  urlSubmitted: boolean = false;
  numberOfRowsSubmitted: boolean = false;


  constructor() {

  }

  AddEmployee(){
    this.employees.push(new Employee(this.counter++, 'Huber', 'Benedikt', 'Mr.', 'Sir', new Date('13-03-2005'), new Date('13-03-2005'), 'Ocwirkgasse 5/4/10', 'Vienna', 'Vienna', '1210', 'Austria', '9274930923849', '+43', 'asdkföjasdkföasdfkaösfk', 'The smartest guy', 3, 'photo.png'))
    this.employees = this.employees.slice();
  }

  getEmployees(value: number) {
    this.employees = this.service.GetEmployees(value);
    this.employees.push(new Employee(1, 'Rako', 'Benedikt', 'Mr.', 'Sir', new Date('13-03-2005'), new Date('13-03-2005'), 'Ocwirkgasse 5/4/10', 'Vienna', 'Vienna', '1210', 'Austria', '9274930923849', '+43', 'asdkföjasdkföasdfkaösfk', 'The smartest guy', 3, 'photo.png'));
    this.employees = this.employees.slice();
    this.numberOfRowsSubmitted = true;
  }

  changeUrl(value: any) {
    this.service.Url = value;
    console.log(value);
    this.urlSubmitted = true;
  }

  addEmployee($event: Employee) {
    console.log($event);
    console.log(JSON.stringify($event));
    this.employees.push($event);
    this.employees = this.employees.slice();
  }
}
