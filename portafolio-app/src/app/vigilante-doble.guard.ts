import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class VigilanteDobleGuard implements CanActivate {

  constructor(
    private cookieService: CookieService,
    private _router: Router
  ) { }

  redirect(flag:boolean):any{
    if(!flag){
      this._router.navigate(['/','login'])
    }
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const cookie = this.cookieService.check('token_access');
      this.redirect(cookie)
      return cookie;
    }
  
}
