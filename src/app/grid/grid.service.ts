import { Injectable } from '@angular/core';
import {Annonce} from '../annonce/annonce.model';
import {element} from 'protractor';
import index from '@angular/cli/lib/cli';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  private annoncer: Annonce[];
  private sortedAnnoncer: Annonce[];

  constructor() { }

  setGrid(annoncer: Annonce[]) {
    this.annoncer = annoncer;
  }

//  sortGridKategori(kategori: Kategori) {
  //  sortedIndex = 0;
  //  for (i = 0; i < this.annoncer.length;) {
  //    if (this.annoncer[i].kategori === kategori){
 //       this.sortedAnnoncer[sortedIndex] = this.annoncer[i];
 //     }
 //   }


 // }

  getGrid() {
    return this.sortedAnnoncer;
  }
}
