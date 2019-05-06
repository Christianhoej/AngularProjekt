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
    console.log(this.loggetInd);
  }

  opretBruger(bruger: any) {
    return this.http.post(this.resourceURL.usersURL, bruger);
  }

  logind(email: string, password: string){
    return this.http.post(this.resourceURL.usersLoginURL, {email: email, password: password});
  }
}
