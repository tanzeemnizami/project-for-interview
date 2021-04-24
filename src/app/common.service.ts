import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  Url = "http://localhost:3000/employees";
  constructor(private _http: HttpClient) { }
  createEmployee(data:any){
    return this._http.post(this.Url,data)
  }
  getEmployee(){
    return this._http.get(this.Url);
  }
  deleteEmployee(id:any){
    return this._http.delete(`${this.Url}/${id}`);
  }
  fatchEmployee(id:any){
    return this._http.get(`${this.Url}/${id}`);
  }
}
