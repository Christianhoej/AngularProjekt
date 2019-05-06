import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourceURLService {
  categoryURL = 'http://localhost:8080/Homely-ws/category?page=1&limit=25';
  adsURL = 'http://localhost:8080/Homely-ws/ads';
  adsCategoryURL = this.adsURL + '/categoryads';
  usersURL = 'http://localhost:8080/Homely-ws/users';
  usersLoginURL = this.usersURL + '/login';
  usersIDURL = this.usersURL + '/userID';
  adminURL = 'http://localhost:8080/Homely-ws/admin';

}
