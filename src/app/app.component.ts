import { Component } from '@angular/core';
import {Employee} from "./employee-service/employee";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'INSY_API_Frontend';
  employees: Employee[] = [];

  AddEmployee(){
    this.employees.push(new Employee(1, 'Rako', 'Benedikt', 'Mr.', 'Sir', new Date('13-03-2005'), new Date('13-03-2005'), 'Ocwirkgasse 5/4/10', 'Vienna', 'Vienna', '1210', 'Austria', '9274930923849', '+43', 'asdkföjasdkföasdfkaösfk', 'The smartest guy', 3, 'photo.png'))
    this.employees = this.employees.slice();
  }

  constructor() {
    this.employees.push(new Employee(1, 'Rako', 'Benedikt', 'Mr.', 'Sir', new Date('13-03-2005'), new Date('13-03-2005'), 'Ocwirkgasse 5/4/10', 'Vienna', 'Vienna', '1210', 'Austria', '9274930923849', '+43', 'asdkföjasdkföasdfkaösfk', 'The smartest guy', 3, 'photo.png'));
  }
}
