import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {BrugerService} from './bruger/services/bruger.service';
import {logger} from 'codelyzer/util/logger';

@Injectable()
export class AuthGuard implements CanActivate{
  loggedInd = false;
  constructor(private brugerService: BrugerService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.brugerService.loggetInd){
        return true;
      }
      else {
        this.router.navigate(['/log_ind']);
        return false;
      }
  }

}
