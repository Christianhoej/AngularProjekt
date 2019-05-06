import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Annonce} from './annonce.model';

@Injectable({
  providedIn: 'root'
})
export class AnnonceDataService {
  annoncer: Annonce[];
  constructor(private http: HttpClient) {}

  hentAnnoncer() {
    this.http.get('https://localhost:8080/Homely-ws/ads')
      .subscribe(
      (annoncer: Annonce[]) => {this.annoncer = annoncer;
      }
      );
    return this.annoncer;
  }

/*  saveAnnoncer() {
    this.http.put('https://something.com', this.annonceService.getAnnoncer());
  }
*/
}
