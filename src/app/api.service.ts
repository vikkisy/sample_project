import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class ApiService {

  private _url= 'assets/json/product-payload.json';
  constructor(private _http: Http) { }

  getProducts(){
    return this._http.get(this._url)
    .map(Response => Response.json())
    .toPromise();
  }

  


}
