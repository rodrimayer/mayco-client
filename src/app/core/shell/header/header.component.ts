import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from '../../../_service/auth.service';

@Component({
  selector: 'nr-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit /*, AfterViewInit*/{

  isLogin = false;

  PATH_LOGO = 'assets/logo_sin_fondo.png';

  constructor(/*private cdr: ChangeDetectorRef*/) {}
  
  ngOnInit() { }

  isLoggedIn(): boolean {
    return AuthService.isLoggedIn_aux;
  }

/*
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
*/

}
