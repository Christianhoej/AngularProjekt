import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResourceURLService} from '../../resourceURL.service';
import {Bruger} from '../Models/bruger.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrugerService {
  bruger: Bruger;
  loggetInd = new Subject<boolean>();
  constructor(private http: HttpClient,
              private resourceURL: ResourceURLService) {
    this.loggetInd.next(false);
  }

  opretBruger(bruger: any) {
    return this.http.post(this.resourceURL.usersURL, bruger);
  }

  logind(email: string, password: string){
    return this.http.post(this.resourceURL.usersLoginURL, {email: email, password: password});
  }

  redigerBruger(bruger: Bruger) {
    return this.http.put(this.resourceURL.usersURL + '/id', bruger);
  }

  getMineAnnoncer(bruger: Bruger) {
    return this.http.get(this.resourceURL.adsURL + '/' + bruger.userId + '/userads');
  }

  getMinAnnonce(id: string) {
    return this.http.get(this.resourceURL.adsURL + '/' + id);
  }
}
