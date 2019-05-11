import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ResourceURLService} from '../../resourceURL.service';

@Injectable()
export class KategoriService {
  kategoriValgt = new Subject<string>();

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
