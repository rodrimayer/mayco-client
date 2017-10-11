import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,
  Router
} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { AuthService } from '../_service/auth.service';

@Injectable()
export class SimpleAuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private _authService: AuthService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      console.log(this._authService.isLoggedIn());

    if (this._authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
      return false;
    }

  }
}
