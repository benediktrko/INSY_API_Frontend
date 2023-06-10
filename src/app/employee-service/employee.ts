
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
  toJson(){
  return{
    LastName: this.LastName,
    FirstName: this.FirstName,
    Title: this.Title,
    TitleOfCourtesy: this.TitleOfCourtesy,
    BirthDay: this.Birthday.toJSON(),
    HireDate: this.HireDate.toJSON(),
    Address: this.Address,
    City: this.City,
    Region: this.Region,
    PostalCode: this.PostalCode,
    Country: this.Country,
    HomePhone: this.HomePhone,
    Extension: this.Extension,
    Photo: this.Photo,
    Notes: this.Notes,
    ReportsTo: this.ReportsTo,
    PhotoPath: this.PhotoPath

  }
  }
  static fromJson(json: any): Employee {


    return new Employee(
      json.employeeId,
      json.lastName,
      json.firstName,
      json.title,
      json.titleOfCourtesy,
      new Date(json.birthday),
      new Date(json.hireDate),
      json.address,
      json.city,
      json.region,
      json.postalCode,
      json.country,
      json.homePhone,
      json.extension,
      json.photo,
      json.notes,
      json.reportsTo,
      json.photoPath
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
