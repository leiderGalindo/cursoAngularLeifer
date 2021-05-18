import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private _http: HttpClient) { }

  public get(url:string){
    return this._http.get(url);//retornar los datos de la url
  }

  public post(url:string, body){
    return this._http.post(url,body);
  }
}
