import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResourceURLService} from '../../resourceURL.service';
import {Bruger} from '../bruger.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrugerService {
  bruger: Bruger;
  loggetInd: boolean = false;
  loggetIndSubject = new Subject<boolean>();
  constructor(private http: HttpClient,
              private resourceURL: ResourceURLService) {
    this.loggetIndSubject.next(false);
  }

  opretBruger(bruger: any) {
    return this.http.post(this.resourceURL.usersURL, bruger);
  }

  chechEmail(email: string) {
    return this.http.get(this.resourceURL.usersURL + '/checkEmail/' + email);
  }

  logind(email: string, password: string){
    return this.http.post(this.resourceURL.usersLoginURL, {email: email, password: password});
  }

  redigerBruger(bruger: Bruger) {
    return this.http.put(this.resourceURL.usersURL + '/' + bruger.userId, bruger);
  }

  getMineAnnoncer(bruger: Bruger) {
    return this.http.get(this.resourceURL.adsURL + '/' + bruger.userId + '/userads');
  }

  getMinAnnonce(id: string) {
    return this.http.get(this.resourceURL.adsURL + '/' + id);
  }
}
