import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Annonce} from '../models/annonce.model';
import {Observable} from 'rxjs';
import {AnnonceService} from './annonce.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AnnonceListResolver implements Resolve<any[]>{
  constructor(private annonceService: AnnonceService) {}
  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.annonceService.getAnnoncer();
  }

}
