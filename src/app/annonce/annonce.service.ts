import {Annonce} from './annonce.model';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class AnnonceService {
  annonceændret = new Subject<Annonce[]>();

  private annoncer: Annonce[] = [  ];

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

  addAnnonce (annonce: Annonce) {
    this.annoncer.push(annonce);
    this.annonceændret.next(this.annoncer.slice());
  }

}
