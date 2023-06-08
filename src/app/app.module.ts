import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from "@angular/material/paginator";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MatChipsModule } from '@angular/material/chips';




import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeFormComponent,
    EmployeeTableComponent,
  ],
    imports: [
        BrowserModule,
        MatTableModule,
        HttpClientModule,
        MatPaginatorModule,
        BrowserAnimationsModule,
        MatChipsModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
