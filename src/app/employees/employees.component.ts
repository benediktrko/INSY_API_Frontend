import { Component } from '@angular/core';
import {map, Observable} from "rxjs";
import {Employee} from "../employee-service/employee";

import { Injectable } from '@angular/core';

import { catchError, retry } from 'rxjs/operators';
import {HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders} from '@angular/common/http';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {



}

export class DateTimeService{
  private _dateTime: DateTime[] = [];
  private _dateTimesUrl: string = "http://date.jsontest.com/"

  GetDateTime(top: number){
    let employees : Observable<Employee[]> = this.http.get<any[]>(`${this._dateTimesUrl}`);
    employees.subscribe()
    return this._dateTime;
  }

  constructor(private http: HttpClient) {

  }
}
export class DateTime {
  constructor(private _date: string,
              private _millisecondsSinceEpoch: number,
              private _time: string) {
  }

  static fromJson(json: any): DateTime {
    return new DateTime(json.date, json.milliseconds_since_epoch, json.time);
  }

  get Date(){
    return this._date;
  }

  get MillisecondsSinceEpoch(){
    return this._millisecondsSinceEpoch;
  }

  get Time(){
    return this._time;
  }


}
