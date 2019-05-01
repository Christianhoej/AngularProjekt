import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Kategorier} from './kategorier.model';

@Injectable()
export class KategoriService {

  private kategori: Kategorier[] = [new Kategorier('Nips'),
    new Kategorier('Møbel'),
    new Kategorier('Til køkkenet'),
    new Kategorier('Tøj'),
    new Kategorier('Kunst'),
    new Kategorier('Til børn'),
    new Kategorier('Andet')];
  getKategorier() {
    return this.kategori.slice();
  }

  getKategori(index: number) {
    return this.kategori[index];
  }
}
