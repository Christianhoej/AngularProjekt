import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {BrugerService} from './bruger/services/bruger.service';
import {logger} from 'codelyzer/util/logger';

@Injectable()
export class AuthGuard implements CanActivate{
  loggedInd: boolean = false;
  constructor(private brugerService: BrugerService, private router: Router) {
    this.brugerService.loggetInd.subscribe(
      (logind: boolean) => {
        if (logind){
          this.loggedInd= true;
        }
        else {
          this.router.navigate(['/log_ind']);
          this.loggedInd = false;
        }
      }
    );
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.loggedInd){
        return true;
      }
      else {
        this.router.navigate(['/log_ind']);
        return false;
      }
  }

}
