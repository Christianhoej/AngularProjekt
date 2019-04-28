import {Annonce} from './annoncetest.model';
import {Subject} from 'rxjs';

import {Injectable} from '@angular/core';

@Injectable()
export class AnnoncetestService {

  annonceændret = new Subject<Annonce[]>();

  private annoncer: Annonce[] = [
    new Annonce(
      'Stol',
      300,
      'https://upload.wikimedia.org/wikipedia/commons/b/b1/Stol_Rex.jpg',
      'Havestol',
      ['møbler'],
      ['træ']
    ),
    new Annonce(
      'Maleri',
      3000,
      'https://upload.wikimedia.org/wikipedia/commons/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
      'Smukt Maleri',
      ['kunst'],
      ['']
    ),
    new Annonce(
      'Strikket sweater',
      250,
      'https://da.wikipedia.org/wiki/Jakke#/media/File:Lusekofte.jpg',
      'Hjemmelavet strikket sweater',
      ['strik'],
      ['']
    ),

  ];

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
