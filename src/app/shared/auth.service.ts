import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {User} from '../account/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;
  admin = false;

  constructor(private httpClient: HttpClient) {}

  logIn(login, password) : Observable<any> {
    // typiquement, acceptera en paramètres un login et un password
    // vérifier qu'ils sont ok, et si oui, positionner la propriété loggedIn à true
    // si login/password non valides, positionner à false;
    let user = new User();
    user.Identifiant = login;
    user.Password = password;

    if (login === 'admin') this.admin = true;
    const url = environment.apiUrl + 'user/login';
    return this.httpClient.post(url, user);
  }

  logOut() {
    this.loggedIn = false;
    this.admin = false;
  }

  // exemple d'utilisation :
  // isAdmin.then(admin => { console.log("administrateur : " + admin);})
  isAdmin() {
    return new Promise((resolve, reject) => {
      resolve(this.admin);
    });
  }
}
