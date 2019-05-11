import {Annonce} from '../models/annonce.model';
import { Subject } from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResourceURLService} from '../resourceURL.service';
import {AnnonceDataService} from './annonce-data.service';
import {Kategorier} from '../startside/kategorier/kategorier.model';
import {applySourceSpanToExpressionIfNeeded} from '@angular/compiler/src/output/output_ast';
import {ImageModel} from './image.model';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  annonceændret = new Subject<Annonce[]>();
  annoncer: Annonce[];
  annonce: Annonce;
  headers = new Headers();
  httpHeaders: HttpHeaders;
  clientID = 'Client-ID 7a637dc121fecc9';


  constructor(private http: HttpClient,
              private resourceURL: ResourceURLService) {
  }

  getAnnoncer() {
    return this.http.get(this.resourceURL.adsURL);
  }

  getAnnonce(id: string) {
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
    //this.headers2.append('Authorization', this.clientID);
     // this.headers2.append('Access-Control-Allow-Origin', 'https://api.imgur.com/3/upload');
  //  this.headers2.append('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE, OPTIONS');
//    this.headers2.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
  //  this.headers2.append('Content-Type', 'application/json')
    return this.http.post(this.resourceURL.uploadImageURL, file, {headers: this.httpHeaders});
  }

}
