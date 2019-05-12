import {Annonce} from '../annonce.model';
import { Subject } from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResourceURLService} from '../../resourceURL.service';
import {Bruger} from '../../bruger/bruger.model';

@Injectable({
  providedIn: 'root'
  })
export class AnnonceService {
  annonceændret = new Subject<Annonce[]>();
  annoncer: Annonce[];
  annonce: Annonce;
  httpHeaders: HttpHeaders;
  clientID = 'Client-ID 7a637dc121fecc9';

  constructor(private http: HttpClient,
              private resourceURL: ResourceURLService) { }

  getAnnoncer() {
    return this.http.get(this.resourceURL.adsURL);
  }

  getAnnonce(id: string) {
    return this.http.get(this.resourceURL.adsURL + '/' + id);
  }

  filtrerAnnonce(kategori: string) {
    return this.http.get(this.resourceURL.adsCategoryURL + '/' + kategori);
  }

  redigerAnnonce(annonce: Annonce) {
    return this.http.put(this.resourceURL.adsURL + '/' + annonce.adId, annonce);
  }

  sletAnnonce(id: string) {
    return this.http.delete(this.resourceURL.adsURL + '/' + id);
  }

  opretAnnonce(annonce: any) {
    return this.http.post(this.resourceURL.adsURL, annonce);
  }

  getMineAnnoncer(bruger: Bruger) {
    return this.http.get(this.resourceURL.adsURL + '/' + bruger.userId + '/userads');
  }

  getMinAnnonce(id: string) {
    return this.http.get(this.resourceURL.adsURL + '/' + id);
  }

  uploadImage(file: File) {
    this.httpHeaders = new HttpHeaders({
      'Authorization': this.clientID
      // 'Content-Type': 'text/JSON',
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    });
    // this.headers2.append('Authorization', this.clientID);
    // this.headers2.append('Access-Control-Allow-Origin', 'https://api.imgur.com/3/upload');
    //  this.headers2.append('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE, OPTIONS');
//    this.headers2.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    //  this.headers2.append('Content-Type', 'application/json')
    return this.http.post(this.resourceURL.uploadImageURL, file, {headers: this.httpHeaders});
  }
}
