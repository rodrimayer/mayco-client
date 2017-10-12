import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../_service/auth.service';

@Component({
  selector: 'nr-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  isLogin = false;

  PATH_LOGO = 'assets/logo_sin_fondo.png';

  constructor() { }

  ngOnInit() { }

  isLoggedIn(): boolean {
    return AuthService.isLoggedIn_aux;
  }

}
