import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourceURLService {
  // categoryURL = 'http://localhost:8080/Homely-ws/category?page=1&limit=25';
  // adsURL = 'http://localhost:8080/Homely-ws/ads';
  // adsCategoryURL = this.adsURL + '/categoryads';
  // usersURL = 'http://localhost:8080/Homely-ws/users';
  // usersLoginURL = this.usersURL + '/login';
  // usersIDURL = this.usersURL + '/userID';
  // uploadImageURL = 'https://api.imgur.com/3/upload';
  //
  // categoryURL = 'http://130.225.170.204:19926/homely/category?page=1&limit=25';
  // adsURL = 'http://130.225.170.204:19926/homely/ads';
  // adsCategoryURL = this.adsURL + '/categoryads';
  // usersURL = 'http://130.225.170.204:19926/homely/users';
  // usersLoginURL = this.usersURL + '/login';
  // usersIDURL = this.usersURL + '/userID';
  // uploadImageURL = 'https://api.imgur.com/3/upload';

  categoryURL = 'http://130.225.170.204:9993/homely/category?page=1&limit=100000';
  adsURL = 'http://130.225.170.204:9993/homely/ads';
  adsCategoryURL = this.adsURL + '/categoryads';
  usersURL = 'http://130.225.170.204:9993/homely/users';
  usersLoginURL = this.usersURL + '/login';
  usersIDURL = this.usersURL + '/userID';
  uploadImageURL ='https://api.imgur.com/3/image';
}
