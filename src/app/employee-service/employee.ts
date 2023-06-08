
export class Employee{

static readonly tableHeader = [
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
  static fromJson(json: any): Employee {


    return new Employee(
      json.EmployeeId,
      json.LastName,
      json.FirstName,
      json.Title,
      json.TitleOfCourtesy,
      new Date(json.Birthday),
      new Date(json.HireDate),
      json.Address,
      json.City,
      json.Region,
      json.PostalCode,
      json.Country,
      json.HomePhone,
      json.Extension,
      json.Photo,
      json.Notes,
      json.ReportsTo,
      json.PhotoPath
      );
  }
  constructor(private _employeeId: number,
              private _lastName: string,
              private _firstName: string,
              private _title: string,
              private _titleOfCourtesy: string,
              private _birthday: Date,
              private _hireDate: Date,
              private _address: string,
              private _city: string,
              private _region: string,
              private _postalCode: string,
              private _country: string,
              private _homePhone: string,
              private _extension: string,
              private _photo: string,
              private _notes: string,
              private _reportsTo: number,
              private _photoPath: string) {

  }
  get EmployeeId(){
    return this._employeeId;
  }

  get LastName(){
    return this._lastName;
  }

  get FirstName(){
    return this._firstName;
  }

  get Title(){
    return this._title;
  }

  get TitleOfCourtesy(){
    return this._titleOfCourtesy;
  }

  get Birthday(){
    return this._birthday;
  }

  get HireDate(){
    return this._hireDate;
  }

  get Address(){
    return this._address;
  }

  get City(){
    return this._city;
  }

  get Region(){
    return this._region;
  }

  get PostalCode(){
    return this._postalCode;
  }

  get Country(){
    return this._country;
  }

  get HomePhone(){
    return this._homePhone;
  }

  get Extension(){
    return this._extension;
  }

  get Photo(){
    return this._photo;
  }

  get Notes(){
    return this._notes;
  }

  get ReportsTo(){
    return this._reportsTo;
  }

  get PhotoPath(){
    return this._photoPath;
  }
}
