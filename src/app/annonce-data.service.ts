import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {AnnonceService} from './annonce/annonce.service';
import {Annonce} from './annonce/annonce.model';

@Injectable({
  providedIn: 'root'
})
export class AnnonceDataService {

  constructor(private http: HttpClient, private annonceService: AnnonceService) {}

  getAnnoncer() {
    this.http.get('https://stomething.com').subscribe(
      (annoncer: Annonce[]) => {
        this.annonceService.setAnnoncer(annoncer);
      }
      );
  }

  saveAnnoncer() {
    this.http.put('https://something.com', this.annonceService.getAnnoncer());
  }

}
