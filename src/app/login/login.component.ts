import { TSMap } from 'typescript-map';
import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users/_service/users.service';
import { User } from '../_model/user.model';
import { AuthService } from '../_service/auth.service';

declare var jQuery: any;

@Component({
  selector: 'nr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  _isLoggedIn = false;
  name = '';
  welcome = 'Bienvenido ';


  user_login: User = { username: '', password: '' };

  resp: TSMap<string, User> = null;
  message_returned = '';
  // user_returned: User = null;

  constructor(private _usersService: UsersService, private _authService: AuthService) { }

  ngOnInit() {
    console.log('user_session : ' + sessionStorage.getItem('user'));

    const user_session: User = JSON.parse(sessionStorage.getItem('user'));
    if (user_session != null) {
      this._isLoggedIn = true;
      this.name = user_session.name;
      this._authService.login(user_session);
    }

  }

  login(): void {

    this._usersService.login(this.user_login).subscribe(
      data => {

        this.resp = data;

        let user_returned: User = null;

        const k: any[] = this.resp.map(function (value, key) {
          return key;
        });

        const v: any[] = this.resp.map(function (value, key) {
          return value;
        });

        this.message_returned = k[0];
        user_returned = v[0];

        alert(this.message_returned);


        if (user_returned !== null) {
          this._isLoggedIn = true;
          this.name = user_returned.name;
          this._authService.login(user_returned);
        }
        this.cleanUserLogin();

        jQuery('#login-modal').modal('toggle');
      });
  }

  logout(): void {
    this._isLoggedIn = false;
    this.name = '';
    this._authService.logout();

  }

  cleanUserLogin(): void {
    this.user_login = { username: '', password: '' };
  }

}
