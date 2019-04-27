import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemdataService {

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get('https://reqres.in/api/users');
  }
}
