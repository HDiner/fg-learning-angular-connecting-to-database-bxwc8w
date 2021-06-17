import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ConnectingToDatabaseService {
  private _http: Http;

  constructor(private http: Http) {
    this._http = http;
  }

  public getData(api?: string,  size: number = 10, page: number = 1) {
    if (!api) {
        api = `https://connecttomongoatlas--vladimirioan82.repl.co/data`
    } 
    return this._http.get(api);
  }
 

}