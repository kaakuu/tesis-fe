import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  url : string = 'http://localhost:8000/api'
  constructor(
    private _http : HttpClient
  ) { }

  validate( formData: FormData, username : string ){
    const url = `${this.url}/file/validate?user_id=${username}`;

    return this._http.post(url, formData);

  }

  upload( formData: FormData, username : string, filename: string ){
    const url = `${this.url}/file/upload?user_id=${username}&filename=${filename}`;

    return this._http.post(url, formData);

  }
}
