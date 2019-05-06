import {Bruger} from '../Models/bruger.model';
import {HttpClient} from '@angular/common/http';

export class AuthService {

  constructor(private http: HttpClient) { }

  signUpUser(brugerinfo: Bruger) {
    // TODO create postrequest to opretbruger.

  }
  singInUser(email: string, password: string) {
    this.http.post('http://localhost:8080/Homely-ws/users/login', {
      email: 'gunn@test.dk',
      password: '54439844',
    });
  }

}
