import {Component, EventEmitter, Output} from '@angular/core';
import {Employee} from "../employee-service/employee";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  @Output('employeeAdded') employeeAddedEvent = new EventEmitter();

  addEmployee(form: NgForm) {
    console.log(form.value);
    this.employeeAddedEvent.emit(form.value);
  }

  protected readonly Employee = Employee;

  readonly tableHeader = [
    'select',
    'EmployeeId',
    'LastName',
    'FirstName',
    'Title',
    'TitleOfCourtesy',
    'Birthday',
    'HireDate',
    'Address',
    'City',
    'Region',
    'PostalCode',
    'Country',
    'HomePhone',
    'Extension',
    'Photo',
    'Notes',
    'ReportsTo',
    'PhotoPath'
  ]
}
