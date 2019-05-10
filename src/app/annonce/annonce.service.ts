import {Annonce} from '../models/annonce.model';
import { Subject } from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResourceURLService} from '../resourceURL.service';
import {AnnonceDataService} from './annonce-data.service';
import {Kategorier} from '../startside/kategorier/kategorier.model';
import {applySourceSpanToExpressionIfNeeded} from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
  })
export class AnnonceService {
  annonceændret = new Subject<Annonce[]>();
  annoncer: Annonce[];
  annonce: Annonce;

  constructor(private http: HttpClient,
              private resourceURL: ResourceURLService,)  { }

  getAnnoncer() {
    return this.http.get(this.resourceURL.adsURL);
  }

  getAnnonce(id: string) {
    return this.http.get(this.resourceURL.adsURL + '/' + id);
  }

  filtrerAnnonce(kategori: string) {
    return this.http.get(this.resourceURL.adsCategoryURL + '/' + kategori);
  }

  redigerAnnonce(annonce: Annonce, id: string) {
    return this.http.put(this.resourceURL.adsURL + '/' + id, annonce);
  }

  sletAnnonce(id: string) {
    return this.http.delete(this.resourceURL.adsURL + '/' + id);
  }


  opretAnnonce(annonce: any) {
    return this.http.post(this.resourceURL.adsURL, annonce);
  }




/*
  getAnnonce(index: number) {
    return this.annoncer[index];
  }

  addAnnonce(annonce: Annonce) {
    this.annoncer.push(annonce);
    this.annonceændret.next(this.annoncer.slice());
  }*/
}
