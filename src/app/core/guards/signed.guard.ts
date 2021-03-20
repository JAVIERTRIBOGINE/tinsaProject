import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService} from 'src/app/core/services/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class SignedGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthorizationService ) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isLogged();
  }
  
}
