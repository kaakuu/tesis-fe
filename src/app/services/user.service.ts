import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http : HttpClient
  ) { }

  login( payload : {user: string, password: string, network: string } ){
    const url = "http://localhost:8000/api/enroll/login";
    return this._http.post( url, payload);
  }

  setUserInfo( token : string ){
    const user = jwt_decode(token);
    localStorage.setItem('user_info', JSON.stringify(user));
  }

  getLoggedUser(){
    const data = localStorage.getItem('user_info');
    if( data )
      return JSON.parse(data);
    else
      return data;
  }



}
