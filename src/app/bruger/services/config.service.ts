import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  opretBruger(bruger: any) {
  /*  const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-origin': '*',
        'Access-Control-Allow-Methods': 'POST'
      })
    };*/

    return this.http.post('http://localhost:8080/Homely-ws/users', bruger);
  }

}
