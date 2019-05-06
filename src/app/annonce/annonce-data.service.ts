import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Annonce} from './annonce.model';
import {ResourceURLService} from '../resourceURL.service';

@Injectable({
  providedIn: 'root'
})
export class AnnonceDataService {
  annoncer: Annonce[];
  constructor(private http: HttpClient, private resourceURL: ResourceURLService) {}

  /*hentAnnoncer() {
    this.http.get('https://localhost:8080/Homely-ws/ads')
      .subscribe(
      (annoncer: Annonce[]) => {this.annoncer = annoncer;
      }
      );
    return this.annoncer;
  }*/

  hentAnnoncer() {
    return this.http.get(this.resourceURL.adsURL);
  }

  getAnnonce(id: string) {
    return this.http.get(this.resourceURL.adsURL + '/' + id);
  }

/*  saveAnnoncer() {
    this.http.put('https://something.com', this.annonceService.getAnnoncer());
  }
*/
}
