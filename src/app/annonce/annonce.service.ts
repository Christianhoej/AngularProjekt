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

  constructor(private http: HttpClient, private resourceURL: ResourceURLService,
              private annonceDataService: AnnonceDataService)  { }

  getAnnoncer() {
    return this.http.get(this.resourceURL.adsURL);
  }

  getAnnonce(id: string) {
    return this.http.get(this.resourceURL.adsURL + '/' + id);
  }

  filtrerAnnonce(kategori: string) {
    console.log('dette er kategoriiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii: ' + kategori);
    return this.http.get(this.resourceURL.adsCategoryURL + '/' + kategori);
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
