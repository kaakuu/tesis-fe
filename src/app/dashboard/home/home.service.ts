import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private _http: HttpClient
  ) { }

  getFiles(){
    return this._http.get<{url: string, name:string}[]>('http://localhost:8000/api/file/files');
  }
}
