import {Component, Input, ViewChild, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import {Employee} from "../employee-service/employee";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {of} from "rxjs";
import {MatSort} from "@angular/material/sort";
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements AfterViewInit, OnChanges{
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input('employees') employees: Employee[] = [];
  datasource: MatTableDataSource<Employee> = new MatTableDataSource<Employee>([]);
  selection = new SelectionModel<Employee>(true, []);

  tableHeader = Employee.tableHeader;


  constructor() {

  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes.employees) {
      this.employees = changes.employees.currentValue;
      this.refresh();
    }
  }

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }
  refresh() {
    of(this.employees).subscribe((data: Employee[]) => {
      this.datasource.data = data.slice();
      this.paginator._changePageSize(this.paginator.pageSize);
    });

  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.datasource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.datasource.data.forEach(row => this.selection.select(row));
  }

  delete(){

    for (let employee of this.selection.selected) {
      this.employees.splice(this.employees.indexOf(employee, 0), 1);
      this.selection.toggle(employee);
    }
    this.refresh();
  }

  applyFilter(filterValue: any) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.datasource.filter = filterValue;
  }
}
