import {Annonce} from './annonce.model';
import { Subject } from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class AnnonceService {
  annonceændret = new Subject<Annonce[]>();
  private annoncer: Annonce[] = [new Annonce('Stol', 2500, 'https://www.ikea.com/dk/da/images/products/lerhamn-bord__0238239_PE377693_S4.JPG', 'Meget fin stol')
  ];

  constructor()  {}

  setAnnoncer(annoncer: Annonce[]) {
    this.annoncer = annoncer;
    this.annonceændret.next(this.annoncer.slice());
  }

  getAnnoncer() {
    return this.annoncer.slice();
  }

  getAnnonce(index: number) {
    return this.annoncer[index];
  }

  addAnnonce(annonce: Annonce) {
    this.annoncer.push(annonce);
    this.annonceændret.next(this.annoncer.slice());
  }

}
