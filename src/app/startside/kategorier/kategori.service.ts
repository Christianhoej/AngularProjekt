import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Kategorier} from './kategorier.model';
import {HttpClient} from '@angular/common/http';
import {ResourceURLService} from '../../resourceURL.service';

@Injectable()
export class KategoriService {
  kategoriValgt = new Subject<string>();
 /* private kategori: Kategorier[] = [new Kategorier('Nips'),
    new Kategorier('Møbel'),
    new Kategorier('Til køkkenet'),
    new Kategorier('Tøj'),
    new Kategorier('Kunst'),
    new Kategorier('Til børn'),
    new Kategorier('Andet')];
*/

  constructor(private http: HttpClient, private resourceURL: ResourceURLService) {
    this.kategoriValgt.next('');
  }

  getKategorier() {
    return this.http.get(this.resourceURL.categoryURL);
  }

  getKategori(index: number) {
    return this.http.get(this.resourceURL.categoryURL + '/' + index);
  }
}
