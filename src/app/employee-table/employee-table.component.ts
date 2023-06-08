import {Component, Input, ViewChild, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import {Employee} from "../employee-service/employee";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {of} from "rxjs";

@Component({
  selector: 'employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements AfterViewInit, OnChanges{
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @Input('employees') employees: Employee[] = [];
  datasource: MatTableDataSource<Employee> = new MatTableDataSource<Employee>([]);

  tableHeader = Employee.tableHeader;

  ngOnChanges(changes: SimpleChanges) {

    if (changes.employees) {
      this.employees = changes.employees.currentValue;
      this.refresh();
    }
  }

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;

  }
  refresh() {
    of(this.employees).subscribe((data: Employee[]) => {
      this.datasource.data = data.slice();
      this.paginator._changePageSize(this.paginator.pageSize);
    });

  }
  constructor() {

  }

}
