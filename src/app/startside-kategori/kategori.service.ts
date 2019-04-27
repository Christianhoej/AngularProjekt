import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class KategoriService {
  kategori = ['Nips', 'Møbler', 'Ler', 'Strik', 'Kunst', 'Til børn', 'Andet '];

  getKategorier() {
    return this.kategori.slice();
  }

  getKategori(index: number) {
    return this.kategori[index];
  }
}
