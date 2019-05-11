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
  headers2 = new HttpHeaders();
  clientID = '7a637dc121fecc9';


  constructor(private http: HttpClient,
              private resourceURL: ResourceURLService,
              private httpHeaders: HttpHeaders) {
  }

  getAnnoncer() {
    return this.http.get(this.resourceURL.adsURL);
  }

  getAnnonce(id: string) {
    return this.http.get(this.resourceURL.adsURL + '/' + id);
  }

  uploadImage(file: File) {
    this.headers2.append('Authorization', this.clientID);
    return this.http.post(this.resourceURL.uploadImageURL, file, {headers: this.headers2});
  }

}
