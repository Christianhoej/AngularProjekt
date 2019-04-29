import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GridService} from './grid/grid.service';
import {Annonce} from './annonce/annonce.model';

@Injectable({
  providedIn: 'root'
})
export class ItemdataService {

  constructor(private http: HttpClient, private gridService: GridService) { }

  getItems() {
    this.http.get('https://reqres.in/api/users').subscribe(
      (annoncer: Annonce[]) => {
        this.gridService.setGrid(annoncer);
      }
    );
  }
}
